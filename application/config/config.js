var fs = require('fs');

module.exports = {
	'app' : {
		'name' : 'Nodeigniter',
		'version' : '1.0.0'
	},
	'ports' : {
		'express' : {
			'http' : 8081,
			'https' : 8082
		}
	},
	'SSL' : {
		'enable' : false,
		'files' : {
			'key' : null,
			'cert' : null
		}
	}
}