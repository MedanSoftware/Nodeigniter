var fs = require('fs');
var multer = require('multer');
let uuidv3 = require('uuid/v3');
var realpath = require('locutus/php/filesystem/realpath');
var pathinfo = require('locutus/php/filesystem/pathinfo');
var helpers = {
	encryption : require('./encryption'),
	url : require('./url'),
	validation : require('./validation')
};

var Helper = {
	
	/**
	 * site data folder
	 * 
	 * @return {String}
	 */
	site_data_folder : function(){
		
	},

	/**
	 * callback function
	 * 
	 * @param  {Function} callback
	 * @return {Function}
	 */
	callback : function(callback) {
		if (callback !== undefined) {
			if (typeof callback == 'function') {
				callback(...Array.prototype.slice.call(arguments, 1));
			} else {
				eval(callback+'(...Array.prototype.slice.call(arguments,1))');
			}
		}
	},

	/**
	 * file upload
	 * 
	 * @param  {Object}   req        express request parameter
	 * @param  {Object}   res        express response parameter
	 * @param  {Object}	  next 		 express next parameter
	 * @param  {String}   field_name field name
	 * @param  {Object}   options    upload options
	 * @param  {Function} callback   callback function
	 * @return {Array}               upload response
	 */
	file_upload : function(req, res, next = false, field_name, options, callback) {
		let destination_path = (options.destination !== undefined)?this.site_data_folder+options.destination:this.site_data_folder+'uploads/';
		let allowed_type = (options.allowed_type !== undefined)?options.allowed_type:'file_type';
		let whitelist = (options.whitelist !== undefined)?options.whitelist:['images','documents'];

		multer({ dest : destination_path }); // init destination folder
		let array_pattern = /[\[\]]/;
		let init =  multer({
			storage : multer.diskStorage({
				destination : (req, file, callback) => {
					callback(null, destination_path);
				},
				filename : (req, file, callback) => {
					if (field_name.match(array_pattern)) {
						res.uploaded = req.files;
					} else {
						res.uploaded = req.file;
					}

					let extension = file.originalname.split('.');
					let file_name = extension.shift();
					
					callback(null,file_name+'-'+Date.now()+'.'+extension.join('.'));
				}
			}),
			fileFilter : (req, file, callback) => {
				helpers.validation.file_mime(file.mimetype, whitelist, allowed_type).then(result => {
					if (result.valid === false) {
						res.upload_error = result.message;
						return callback(null, false, new Error(result.message));
					}

					return callback(null, true);
				});
			}
		});

		if (field_name.match(array_pattern)) {
			req.uploaded = req.files;
			return (next !== false)?init.array(field_name)(req, res, next, callback):init.array(field_name)(req, res, callback);
		} else {
			req.uploaded = req.file;
			return (next !== false)?init.single(field_name)(req, res, next, callback):init.single(field_name)(req, res, next, callback);
		}
	},

	/**
	 * save uploaded file to database
	 * 
	 * @param  {Mixed} 		files       file object or array
	 * @param  {Object} 	module_data object module
	 * @return {Promise} 	sequelize object
	 */
	file_save_db : (files, module_data) => {
		let db_files;
		return new Promise((resolve, reject) => {
			if (Array.isArray(files)) {
				files.forEach(file => {
					Models.file.create({
						module : module_data.name,
						data_id : module_data.id,
						mime : file.mimetype,
						slug : helpers.url.title(file.filename),
						path : realpath(file.path).replace(realpath(Config.files.codeigniter),''),
						realname : file.originalname,
						name : file.filename,
						extension : file.filename.split('.').pop(),
						size : file.size,
						sha1_file : helpers.encryption.sha1(fs.readFileSync(file.path)),
						status : 1
					});
				});
			}
			else {
				Models.file.create({
					module : module_data.name,
					data_id : module_data.id,
					mime : files.mimetype,
					slug : helpers.url.title(files.filename),
					path : realpath(files.path).replace(realpath(Config.files.codeigniter),''),
					realname : files.originalname,
					name : files.filename,
					extension : files.filename.split('.').pop(),
					size : files.size,
					sha1_file : helpers.encryption.sha1(fs.readFileSync(files.path)),
					status : 1
				});
			}
		});
	},

	/**
	 * pathinfo
	 * 
	 * @return {Array}
	 */
	pathinfo : function() {
		return pathinfo(...arguments);
	},

	/**
	 * realpath
	 * 
	 * @return {String}
	 */
	realpath : function() {
		return realpath(...arguments);
	}
}

module.exports = Helper;