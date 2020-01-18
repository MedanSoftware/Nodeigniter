var moment = require('moment');
var winston = require('winston');

module.exports = function() {

	/**
	 * Winston custom level
	 * 
	 * @type {Object}
	 */
	var winston_custom_level = {
		levels : {
			error 	: 0, 
			warn 	: 1, 
			info 	: 2, 
			verbose : 3, 
			debug 	: 4, 
			silly 	: 5
		},
		colors : {
			error 	: 'red',
			warn 	: 'yellow',
			info 	: 'blue',
			verbose : 'green', 
			debug 	: 'cyan',
			silly 	: 'magenta'
		}
	}

	/**
	 * Winston custom format
	 * 
	 * @type {Object}
	 */
	var winston_custom_format = {
		transports_console : {
			default : winston.format.combine(
				winston.format.timestamp(),
				winston.format.splat(),
				winston.format.simple(),
				winston.format.colorize(),
				winston.format.printf(({ level, message, label, timestamp }) => {
					return `${moment().format('[[] DD-MM-YYYY HH:mm:ss []]')} ${level} - ${message}`;
				})
			)
		},
		transports_file : {
			default : winston.format.combine(
				winston.format.timestamp(),
				winston.format.splat(),
				winston.format.simple(),
				winston.format.printf(({ level, message, label, timestamp }) => {
					return `${moment().format('[[] DD-MM-YYYY HH:mm:ss []]')} ${level} - ${message}`;
				})
			)
		},
		exception_handler : winston.format.combine(
			winston.format.timestamp(),
			winston.format.splat(),
			winston.format.simple(),
			winston.format.prettyPrint(),
			winston.format.printf(({ level, message, label, timestamp }) => {
				return `=================================================================================\nDate : ${moment().format('[[] DD-MM-YYYY HH:mm:ss []]')} \nLevel : ${level} \nMessage : ${message}`;
			})
		)
	}

	winston.addColors(winston_custom_level.colors); // winston logger add custom colors

	var Winston = winston.createLogger({
		levels : winston_custom_level.levels,
		transports : [
			// init winston transports console
			new winston.transports.Console({
				level : 'error',
				format : winston_custom_format.transports_console.default,
				handleExceptions: true
			}),
			new winston.transports.Console({
				level : 'debug',
				format : winston_custom_format.transports_console.default,
				handleExceptions: true
			}),
			
			// init winston transports file
			new winston.transports.File({
				level : 'error',
				filename: __dirname+'/../../logs/error/log-'+moment().format('YYYY-MM-DD')+'-error.log',
				format : winston_custom_format.transports_file.default,
				handleExceptions: true
			}),		
			new winston.transports.File({ 
				filename: __dirname+'/../../logs/all/log-'+moment().format('YYYY-MM-DD')+'-all.log',
				format: winston_custom_format.transports_file.default,
				handleExceptions: true
			})
		],
		exceptionHandlers : [
			new winston.transports.File({ 
				filename: __dirname+'/../../logs/exception/log-'+moment().format('YYYY-MM-DD')+'-exception.log',
				format: winston_custom_format.exception_handler,
				handleExceptions: true
			})
		]
	}); // initialize winston logger

	return { Winston };
}