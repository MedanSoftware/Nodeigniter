var fs = require('fs');
var os = require('os');
var Joi = require('@hapi/joi');
var moment = require('moment');
var moment_duration_format = require('moment-duration-format');
let uuidv3 = require('uuid/v3');
var router = require('express').Router();
var router_path = '/';

router.get('/', (req, res, next) => {
	res.json({
		server : {
			hostname : os.hostname(),
			platform : os.platform(),
			type : os.type(),
			release : os.release(),
			node_version : process.version,
			memory_usage : process.memoryUsage(),
			uptime : {
				seconds : os.uptime(),
				formated : moment.duration(os.uptime(), 'seconds').format('hh:mm:ss')
			},
		},
		app : {
			name : Config.app.name,
			version : Config.app.version,
			memory_usage : {
				used : (Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100),
				unit : 'MB',
				text : (Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100)+' MB'
			},
			uptime : {
				seconds : process.uptime(),
				formated : moment.duration(process.uptime(), 'seconds').format('hh:mm:ss')
			}
		}
	});
});

module.exports = { router, router_path }