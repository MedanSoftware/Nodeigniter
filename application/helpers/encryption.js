var cryptojs = require('crypto-js');
var Helper = {
	base64_encode : (string) => {
		return cryptojs.enc.Base64.stringify(cryptojs.enc.Utf8.parse(string));
	},
	base64_decode : (hash) => {
		return cryptojs.enc.Utf8.stringify(cryptojs.enc.Base64.parse(hash));
	},
	md5 : (string) => {
		return cryptojs.MD5(string).toString();
	},
	sha1 : (string) => {
		return cryptojs.SHA1(string).toString();
	}
}

module.exports = Helper;