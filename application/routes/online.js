var fs = require('fs');
var os = require('os');
var Joi = require('@hapi/joi');
var moment = require('moment');
let uuidv3 = require('uuid/v3');
var router = require('express').Router();
var router_path = '/online';
var node_schedule = require('node-schedule');

var Online = {
	anonymous : new Array(),
	device : new Array(),
	user : new Array(),
	store : new Array(),
	socket_session : new Array(),
	socket_session_unique : new Array(),
	identify_schema : Joi.object({
		identify : Joi.object({
			device : Joi.object({
				id : Joi.string().hex().required(),
				type : Joi.string().required(),
				platform : Joi.string().required(),
				vendor : Joi.string().optional(),
				model : Joi.string().optional(),
				is_browser : Joi.boolean().required()
			}).required(),
			browser : 
				Joi.when('device.is_browser',{
				is : true,
				then : Joi.object({
					id : Joi.string().hex().required(),
					text : Joi.string().required(),
					name : Joi.string().required(),
					version : Joi.string().required(),
					is_private : Joi.boolean().required()
				}).required()
			}),
			coordinate : Joi.object().required(),
			webpush : Joi.object().required(),
			user_agent : Joi.string().required(),
			os : Joi.object({
				text : Joi.string().required(),
				name : Joi.string().required(),
				version : Joi.string().required()
			}).required(),
			public_ip : Joi.string().optional()
		}).required(),
		on_page : Joi.string().required(),
		auth_module : Joi.array().items(Joi.object({
			uid : Joi.any().required(),
			name : Joi.string().required()
		})).optional(),
		token : Joi.when('auth_module',{
			is : Joi.array().min(2),
			then : Joi.string().required()
		})
	})
}

module.exports = { router, router_path }