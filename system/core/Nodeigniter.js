module.exports = function(config){
	var fs = require('fs');
	var db = require(__dirname+'/../../application/config/database')((config !== undefined && config.db_group !== undefined)?config.db_group:false);
	var rfs = require('rotating-file-stream');
	var path = require('path');
	var async = require('async');
	var morgan = require('morgan');
	var moment = require('moment');
	var webpush = require('web-push');
	var Sequelize = require('sequelize');
	var pathinfo = require('locutus/php/filesystem/pathinfo');
	var express_session = require('express-session');
	var express_socketio_session = require('express-socket.io-session');

	var models = {};
	var helpers = {};
	var sequelize = {};
	var session  = {
		init : express_session({
			    secret : 'Nodeigniter',
			    resave : true,
			    saveUninitialized : true
		}),
		socketio : function(){
			return express_socketio_session(this.init, { autoSave:true });
		}
	};

	/**
	 * Initialize express
	 */
	morgan.format('Nodeigniter',':remote-addr | :date[clf] | :method | :url | :status | :referrer');
	
	if (config !== undefined && config.express !== undefined) {
		config.express.use(morgan('Nodeigniter',{
				stream : rfs.createStream('log-'+moment().format('YYYY-MM-DD')+'-access.log', {
				path : __dirname+'/../../logs/access/',
				compress : 'gzip'
			})
		})); // init http logger with morgan
		config.express.use(session.init);
	}

	/**
	 * Waterfall booting
	 */
	async.waterfall([

		/**
		 * Initialize database
		 * 
		 * @param  {Function} callback
		 */
		function initializeDatabase(callback) {
			if (typeof db == 'object') {

				if (db.dbdriver.match(/mysql?i/i)) {

					/**
					 * Initialize sequelize for MySQL
					 */
					sequelize = new Sequelize(db.database, db.username, db.password,{
						logging : false,
						host 	: db.hostname,
						dialect	: 'mysql',
						pool 	: {
							max  : 5,
							min  : 0,
							idle : 10000
						},
						hooks 	: {
							beforeDefine : (columns, model) => {
								model.tableName = db.dbprefix + model.name.singular;
								model.underscored = true;
							}
						}
					});

					/**
					 * Database authentication
					 */
					sequelize.authenticate().then(() => {
						Logger().Winston.info('Database initialized');
					},error => {
						Logger().Winston.error('Database authentication failed');
					});

				} else if (db.dbdriver.match(/sqlite/i)) {

					/**
					 * Initialize sequelize for SQLite
					 */
					sequelize = new Sequelize(db.database, db.username, db.password,{
						logging : false,
						storage : db.database,
						dialect	: 'sqlite',
						pool 	: {
							max  : 5,
							min  : 0,
							idle : 10000
						},
						hooks 	: {
							beforeDefine : (columns, model) => {
								model.tableName = db.dbprefix + model.name.singular;
								model.underscored = true;
							}
						}
					});

					/**
					 * Database authentication
					 */
					sequelize.authenticate().then(() => {
						Logger().Winston.info('Database initialized');
					},error => {
						Logger().Winston.error('Database authentication failed');
					});

				} else {
					Logger().Winston.error('Database not supported');
				}
			}

			callback(null, callback);
		},

		/**
		 * Initialize model
		 * 
		 * @param  {Function} callback
		 */
		function initializeModel(error, callback) {
			if (typeof db == 'object') {
				var target = __dirname+'/../../application/models/';
				fs.readdirSync(target).filter(file => {
					return (file !== path.basename(__filename) && (file.slice(-3) === '.js'));
				}).forEach(file => {
					var model = sequelize['import'](path.join(target, file));
					models[model.name] = model;
					
					// force create table "online"
					if (model.name.toLowerCase() == 'online') {
						model.sync({ force: true }).then(() => {
							Logger().Winston.info('Force create table "'+model.name.toLowerCase()+'"');
						}, error => { callback(error, callback) });
						return;
					}

					// create table from model file
					model.sync().then(created => {
						if (models[model.name].associate) {
							models[model.name].associate(models);
						}
					},error => {
						Logger().Winston.error('Failed to create table : "'+model.name.toLowerCase()+'" !');
					});
				});

				callback(null, callback);
				Logger().Winston.info('Model initialized');
			}
		},

		/**
		 * Initialize helper
		 * 
		 * @param  {Function} callback
		 */
		function initializeHelper(error, callback) {

			if (config !== undefined) {
				var target = __dirname+'/../../application/helpers/';

				fs.readdirSync(target).filter(file => {
					return (file !== path.basename(__filename) && (file.slice(-3) === '.js'));
				}).forEach(file => {
					Object.assign(helpers, {[pathinfo(file).filename] : require(path.join(target, file))});
				});

				callback(null, callback);
				Logger().Winston.info('Helper initialized');
			}
		},

		/**
		 * Initialize router
		 * 
		 * @param  {Function} callback
		 */
		function initializeRouter(error, callback) {

			var target = __dirname+'/../../application/routes/';

			fs.readdirSync(target).filter(file => {
				return (file !== path.basename(__filename) && (file.slice(-3) === '.js'));
			}).forEach(file => {
				var router = new Array();
				router[pathinfo(file).filename] = require(path.join(target, file)); // load routing file
				if (config !== undefined && config.express !== undefined) {
					config.express.use(router[pathinfo(file).filename].router_path, router[pathinfo(file).filename].router); // initialize routing
				}
			});

			callback(null, callback);
			Logger().Winston.info('Router initialized');
		}
	],(error, success) => {
		if (error) {
			Logger().Winston.error(error);
			process.exit(0);
		}

		Logger().Winston.info('Booting...');
	});

	models.sequelize = sequelize;
	models.Sequelize = Sequelize;

	return {
		model : models,
		helper : helpers,
		session : session
	}
}