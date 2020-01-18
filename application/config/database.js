module.exports = function(group) {
	var database = {
		default : {
			'hostname'	: '',
			'username' 	: '',
			'password' 	: '',
			'database'	: '',
			'dbdriver'	: '',
			'dbprefix'	: 'nightigniter_',
			'char_set'	: 'utf8mb4',
			'dbcollat'	: 'utf8mb4_unicode_ci'
		}
	}

	return database[group];
}