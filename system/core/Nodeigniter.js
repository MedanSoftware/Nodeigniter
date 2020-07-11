const fs = require('fs');

/**
 * Nodeigniter Version
 * 
 * @type {String}
 */
NI_VERSION = '1.0.0';


/*
 * ------------------------------------------------------
 *  Load the framework constants
 * ------------------------------------------------------
 */

if (fs.existsSync(APPPATH+'config/'+ENVIRONMENT+'/constants.js')) {
	console.log('ada')
} else {
	console.log('x')
}

if (fs.existsSync(APPPATH+'config/constants.js')) {
	console.log('ada')
} else {
	console.log('x')
}

/*
 * ------------------------------------------------------
 *  Load the global functions
 * ------------------------------------------------------
 */

require(BASEPATH+'core/Common');
require(BASEPATH+'core/Controller');