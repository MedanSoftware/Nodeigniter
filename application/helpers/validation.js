var file_type = require('file-type');
var helpers = {
	array : require('./array'),
	mime : require('./mime')
};

var Helper = {
	file_type : file_type,
	file_mime : function(file_mime, allowed_list, allowed_type='extension') {
		var result = {
			allowed : [],
			undefined : []
		};

		var validate_by_extension = async (file_mime, extensions) => {
			extensions.forEach(extension => {
				let findMimeByExtension = helpers.array.arrayobject_find_value(helpers.mime.mimeExtensions,'extension',extension);
				if (findMimeByExtension === false) {
					result.undefined.push(extension);
					result.allowed.push(false);
				} else {
					if (helpers.mime.mimeExtensions[findMimeByExtension].mimes.indexOf(file_mime) !== -1) {
						result.allowed.push(true);
					}
				}
			});

			var data = {
				valid : (result.allowed.length > 0)
			};

			if (result.undefined.length > 0) {
				Object.assign(data,{ undefined : result.undefined });
			}

			if (result.allowed.length == 0) {
				Object.assign(data,{ message : 'only extensions : "' + extensions.join(', ') + '" are allowed' });
			}

			return data;
		};

		var validate_by_filetype = async (file_mime, types) => {
			types.forEach(type => {
				let findMimeByType = helpers.array.arrayobject_find_value(helpers.mime.fileTypes, 'type', type);
				if (findMimeByType === false) {
					result.undefined.push(type);
				} else {
					validate_by_extension(file_mime, helpers.mime.fileTypes[findMimeByType].extensions);
				}
			});

			var data = {
				valid : (result.allowed.length > 0)
			};

			if (result.undefined.length > 0) {
				Object.assign(data,{ undefined : result.undefined });
			}

			if (result.allowed.length == 0) {
				Object.assign(data,{ message : 'only file type : "' + types.join(', ') + '" are allowed' });
			}

			return data;

		};

		if (arguments.length > 3) {
			
			let allowed = Array.prototype.slice.call(arguments);
			allowed.shift();
			allowed.pop();

			switch (arguments[arguments.length-1]) {
				case 'extension':
					return validate_by_extension(file_mime, allowed);
				break;

				case 'file_type':
					return validate_by_filetype(file_mime, allowed);
				break;

				default:
					return validate_by_extension(file_mime, allowed);
				break;
			}
		}
		else {
			if (Array.isArray(allowed_list)) {
				if (allowed_type == 'extension') {
					return validate_by_extension(file_mime, allowed_list);
				} else {
					return validate_by_filetype(file_mime, allowed_list);
				}
			}
		}
	}
}

module.exports = Helper;