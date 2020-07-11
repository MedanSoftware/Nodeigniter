const fs = require('fs');

/**
 * Determines if the current version of NodeJs is equal to or greater than the supplied value
 * 
 * @param  {String}  $version
 * @return {Boolean} TRUE if the current version is $version or higher
 */
global.is_nodejs = function($version) {
	const version_compare = require('version_compare');
	return version_compare.gte(process.version.replace('v', ''), $version.replace('v', ''));
}

/**
 * Tests for file/folder writability
 * 
 * @param  {String}  $file
 * @return {Boolean}
 */
global.is_really_writable = function($file) {
	fs.access($file, fs.constants.R_OK | fs.constants.W_OK, (err) => {
		if (err) {
			return false;
		} else {
			return true;
		}
	});
}

global.load_class = function($class, $directory = 'libraries', $param = null) {
	return require(BASEPATH+'/')
}

global.get_config = function(replace = Array()) {

}

global.config_item = function(item) {

}

global.is_https = function() {

}

global.log_message = function(level, message) {

}