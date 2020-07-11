Object.assign(process.env, require('dotenv').config()); // load .env file in root folder

const path = require('path');

/*
 *---------------------------------------------------------------
 * APPLICATION ENVIRONMENT
 *---------------------------------------------------------------
 *
 * You can load different configurations depending on your
 * current environment. Setting the environment also influences
 * things like logging and error reporting.
 *
 * This can be set to anything, but default usage is:
 *
 *     development
 *     testing
 *     production
 */
ENVIRONMENT = (process.env.ENVIRONMENT || 'development');

switch (ENVIRONMENT) {
	case 'development':
	break;

	case 'testing':
	case 'production':
	break;

	default:
		console.log('The application environment is not set correctly.');
		process.exit(1);
	break;
}

/*
 *---------------------------------------------------------------
 * SYSTEM DIRECTORY NAME
 *---------------------------------------------------------------
 *
 * This variable must contain the name of your "system" directory.
 * Set the path if it is not in the same directory as this file.
 */
let system_path = 'system';


/*
 *---------------------------------------------------------------
 * APPLICATION DIRECTORY NAME
 *---------------------------------------------------------------
 *
 * If you want this front controller to use a different "application"
 * directory than the default one you can set its name here. The directory
 * can also be renamed or relocated anywhere on your server. If you do,
 * use an absolute (full) server path.
 *
 * NO TRAILING SLASH!
 */
let application_folder = 'application';

/*
 *---------------------------------------------------------------
 * VIEW DIRECTORY NAME
 *---------------------------------------------------------------
 *
 * If you want to move the view directory out of the application
 * directory, set the path to it here. The directory can be renamed
 * and relocated anywhere on your server. If blank, it will default
 * to the standard location inside your application directory.
 * If you do move this, use an absolute (full) server path.
 *
 * NO TRAILING SLASH!
 */
let view_folder = '';

// The name of THIS file
SELF = path.basename(__filename);

// Path to the system directory
BASEPATH = path.resolve(system_path)+'/';

// Path to the front controller (this file) directory
FCPATH = path.dirname(path.basename(__filename))+'/';

// Name of the "system" directory
SYSDIR = path.basename(path.resolve(system_path));

APPPATH = path.resolve(application_folder)+'/';

VIEWPATH = view_folder;

/*
 * --------------------------------------------------------------------
 * LOAD THE BOOTSTRAP FILE
 * --------------------------------------------------------------------
 *
 * And away we go...
 */
require(BASEPATH+'/core/Nodeigniter.js');