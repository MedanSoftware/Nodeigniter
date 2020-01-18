var Helper = {
	fileTypes : [
		{
			type : 'images',
			signature : ['FFD8'],
			extensions : ['jpeg', 'jpg', 'jpg2', 'jpe', 'png', 'gif', 'bmp']
		},
		{
			type : 'documents',
			signature : ['504B'],
			extensions : ['doc', 'docx', 'xls', 'xlsx', 'psd', 'pdf', 'ai', 'ppt', 'pptx', 'text', 'txt', 'dot', 'word']
		}
	],
	mimeExtensions :  [
	    {
	        extension: "hqx",
	        mimes: [
	            "application\/mac-binhex40",
	            "application\/mac-binhex",
	            "application\/x-binhex40",
	            "application\/x-mac-binhex40"
	        ]
	    },
	    {
	        extension: "cpt",
	        mimes: "application\/mac-compactpro"
	    },
	    {
	        extension: "csv",
	        mimes: [
	            "text\/x-comma-separated-values",
	            "text\/comma-separated-values",
	            "application\/octet-stream",
	            "application\/vnd.ms-excel",
	            "application\/x-csv",
	            "text\/x-csv",
	            "text\/csv",
	            "application\/csv",
	            "application\/excel",
	            "application\/vnd.msexcel",
	            "text\/plain"
	        ]
	    },
	    {
	        extension: "bin",
	        mimes: [
	            "application\/macbinary",
	            "application\/mac-binary",
	            "application\/octet-stream",
	            "application\/x-binary",
	            "application\/x-macbinary"
	        ]
	    },
	    {
	        extension: "dms",
	        mimes: "application\/octet-stream"
	    },
	    {
	        extension: "lha",
	        mimes: "application\/octet-stream"
	    },
	    {
	        extension: "lzh",
	        mimes: "application\/octet-stream"
	    },
	    {
	        extension: "exe",
	        mimes: [
	            "application\/octet-stream",
	            "application\/x-msdownload"
	        ]
	    },
	    {
	        extension: "class",
	        mimes: "application\/octet-stream"
	    },
	    {
	        extension: "psd",
	        mimes: [
	            "application\/x-photoshop",
	            "image\/vnd.adobe.photoshop"
	        ]
	    },
	    {
	        extension: "so",
	        mimes: "application\/octet-stream"
	    },
	    {
	        extension: "sea",
	        mimes: "application\/octet-stream"
	    },
	    {
	        extension: "dll",
	        mimes: "application\/octet-stream"
	    },
	    {
	        extension: "oda",
	        mimes: "application\/oda"
	    },
	    {
	        extension: "pdf",
	        mimes: [
	            "application\/pdf",
	            "application\/force-download",
	            "application\/x-download",
	            "binary\/octet-stream"
	        ]
	    },
	    {
	        extension: "ai",
	        mimes: [
	            "application\/pdf",
	            "application\/postscript"
	        ]
	    },
	    {
	        extension: "eps",
	        mimes: "application\/postscript"
	    },
	    {
	        extension: "ps",
	        mimes: "application\/postscript"
	    },
	    {
	        extension: "smi",
	        mimes: "application\/smil"
	    },
	    {
	        extension: "smil",
	        mimes: "application\/smil"
	    },
	    {
	        extension: "mif",
	        mimes: "application\/vnd.mif"
	    },
	    {
	        extension: "xls",
	        mimes: [
	            "application\/vnd.ms-excel",
	            "application\/msexcel",
	            "application\/x-msexcel",
	            "application\/x-ms-excel",
	            "application\/x-excel",
	            "application\/x-dos_ms_excel",
	            "application\/xls",
	            "application\/x-xls",
	            "application\/excel",
	            "application\/download",
	            "application\/vnd.ms-office",
	            "application\/msword"
	        ]
	    },
	    {
	        extension: "ppt",
	        mimes: [
	            "application\/powerpoint",
	            "application\/vnd.ms-powerpoint",
	            "application\/vnd.ms-office",
	            "application\/msword"
	        ]
	    },
	    {
	        extension: "pptx",
	        mimes: [
	            "application\/vnd.openxmlformats-officedocument.presentationml.presentation",
	            "application\/x-zip",
	            "application\/zip"
	        ]
	    },
	    {
	        extension: "wbxml",
	        mimes: "application\/wbxml"
	    },
	    {
	        extension: "wmlc",
	        mimes: "application\/wmlc"
	    },
	    {
	        extension: "dcr",
	        mimes: "application\/x-director"
	    },
	    {
	        extension: "dir",
	        mimes: "application\/x-director"
	    },
	    {
	        extension: "dxr",
	        mimes: "application\/x-director"
	    },
	    {
	        extension: "dvi",
	        mimes: "application\/x-dvi"
	    },
	    {
	        extension: "gtar",
	        mimes: "application\/x-gtar"
	    },
	    {
	        extension: "gz",
	        mimes: "application\/x-gzip"
	    },
	    {
	        extension: "gzip",
	        mimes: "application\/x-gzip"
	    },
	    {
	        extension: "php",
	        mimes: [
	            "application\/x-httpd-php",
	            "application\/php",
	            "application\/x-php",
	            "text\/php",
	            "text\/x-php",
	            "application\/x-httpd-php-source"
	        ]
	    },
	    {
	        extension: "php4",
	        mimes: "application\/x-httpd-php"
	    },
	    {
	        extension: "php3",
	        mimes: "application\/x-httpd-php"
	    },
	    {
	        extension: "phtml",
	        mimes: "application\/x-httpd-php"
	    },
	    {
	        extension: "phps",
	        mimes: "application\/x-httpd-php-source"
	    },
	    {
	        extension: "js",
	        mimes: [
	            "application\/x-javascript",
	            "text\/plain"
	        ]
	    },
	    {
	        extension: "swf",
	        mimes: "application\/x-shockwave-flash"
	    },
	    {
	        extension: "sit",
	        mimes: "application\/x-stuffit"
	    },
	    {
	        extension: "tar",
	        mimes: "application\/x-tar"
	    },
	    {
	        extension: "tgz",
	        mimes: [
	            "application\/x-tar",
	            "application\/x-gzip-compressed"
	        ]
	    },
	    {
	        extension: "z",
	        mimes: "application\/x-compress"
	    },
	    {
	        extension: "xhtml",
	        mimes: "application\/xhtml+xml"
	    },
	    {
	        extension: "xht",
	        mimes: "application\/xhtml+xml"
	    },
	    {
	        extension: "zip",
	        mimes: [
	            "application\/x-zip",
	            "application\/zip",
	            "application\/x-zip-compressed",
	            "application\/s-compressed",
	            "multipart\/x-zip"
	        ]
	    },
	    {
	        extension: "rar",
	        mimes: [
	            "application\/x-rar",
	            "application\/rar",
	            "application\/x-rar-compressed"
	        ]
	    },
	    {
	        extension: "mid",
	        mimes: "audio\/midi"
	    },
	    {
	        extension: "midi",
	        mimes: "audio\/midi"
	    },
	    {
	        extension: "mpga",
	        mimes: "audio\/mpeg"
	    },
	    {
	        extension: "mp2",
	        mimes: "audio\/mpeg"
	    },
	    {
	        extension: "mp3",
	        mimes: [
	            "audio\/mpeg",
	            "audio\/mpg",
	            "audio\/mpeg3",
	            "audio\/mp3"
	        ]
	    },
	    {
	        extension: "aif",
	        mimes: [
	            "audio\/x-aiff",
	            "audio\/aiff"
	        ]
	    },
	    {
	        extension: "aiff",
	        mimes: [
	            "audio\/x-aiff",
	            "audio\/aiff"
	        ]
	    },
	    {
	        extension: "aifc",
	        mimes: "audio\/x-aiff"
	    },
	    {
	        extension: "ram",
	        mimes: "audio\/x-pn-realaudio"
	    },
	    {
	        extension: "rm",
	        mimes: "audio\/x-pn-realaudio"
	    },
	    {
	        extension: "rpm",
	        mimes: "audio\/x-pn-realaudio-plugin"
	    },
	    {
	        extension: "ra",
	        mimes: "audio\/x-realaudio"
	    },
	    {
	        extension: "rv",
	        mimes: "video\/vnd.rn-realvideo"
	    },
	    {
	        extension: "wav",
	        mimes: [
	            "audio\/x-wav",
	            "audio\/wave",
	            "audio\/wav"
	        ]
	    },
	    {
	        extension: "bmp",
	        mimes: [
	            "image\/bmp",
	            "image\/x-bmp",
	            "image\/x-bitmap",
	            "image\/x-xbitmap",
	            "image\/x-win-bitmap",
	            "image\/x-windows-bmp",
	            "image\/ms-bmp",
	            "image\/x-ms-bmp",
	            "application\/bmp",
	            "application\/x-bmp",
	            "application\/x-win-bitmap"
	        ]
	    },
	    {
	        extension: "gif",
	        mimes: "image\/gif"
	    },
	    {
	        extension: "jpeg",
	        mimes: [
	            "image\/jpeg",
	            "image\/pjpeg"
	        ]
	    },
	    {
	        extension: "jpg",
	        mimes: [
	            "image\/jpeg",
	            "image\/pjpeg"
	        ]
	    },
	    {
	        extension: "jpe",
	        mimes: [
	            "image\/jpeg",
	            "image\/pjpeg"
	        ]
	    },
	    {
	        extension: "jp2",
	        mimes: [
	            "image\/jp2",
	            "video\/mj2",
	            "image\/jpx",
	            "image\/jpm"
	        ]
	    },
	    {
	        extension: "j2k",
	        mimes: [
	            "image\/jp2",
	            "video\/mj2",
	            "image\/jpx",
	            "image\/jpm"
	        ]
	    },
	    {
	        extension: "jpf",
	        mimes: [
	            "image\/jp2",
	            "video\/mj2",
	            "image\/jpx",
	            "image\/jpm"
	        ]
	    },
	    {
	        extension: "jpg2",
	        mimes: [
	            "image\/jp2",
	            "video\/mj2",
	            "image\/jpx",
	            "image\/jpm"
	        ]
	    },
	    {
	        extension: "jpx",
	        mimes: [
	            "image\/jp2",
	            "video\/mj2",
	            "image\/jpx",
	            "image\/jpm"
	        ]
	    },
	    {
	        extension: "jpm",
	        mimes: [
	            "image\/jp2",
	            "video\/mj2",
	            "image\/jpx",
	            "image\/jpm"
	        ]
	    },
	    {
	        extension: "mj2",
	        mimes: [
	            "image\/jp2",
	            "video\/mj2",
	            "image\/jpx",
	            "image\/jpm"
	        ]
	    },
	    {
	        extension: "mjp2",
	        mimes: [
	            "image\/jp2",
	            "video\/mj2",
	            "image\/jpx",
	            "image\/jpm"
	        ]
	    },
	    {
	        extension: "png",
	        mimes: [
	            "image\/png",
	            "image\/x-png"
	        ]
	    },
	    {
	        extension: "tiff",
	        mimes: "image\/tiff"
	    },
	    {
	        extension: "tif",
	        mimes: "image\/tiff"
	    },
	    {
	        extension: "css",
	        mimes: [
	            "text\/css",
	            "text\/plain"
	        ]
	    },
	    {
	        extension: "html",
	        mimes: [
	            "text\/html",
	            "text\/plain"
	        ]
	    },
	    {
	        extension: "htm",
	        mimes: [
	            "text\/html",
	            "text\/plain"
	        ]
	    },
	    {
	        extension: "shtml",
	        mimes: [
	            "text\/html",
	            "text\/plain"
	        ]
	    },
	    {
	        extension: "txt",
	        mimes: "text\/plain"
	    },
	    {
	        extension: "text",
	        mimes: "text\/plain"
	    },
	    {
	        extension: "log",
	        mimes: [
	            "text\/plain",
	            "text\/x-log"
	        ]
	    },
	    {
	        extension: "rtx",
	        mimes: "text\/richtext"
	    },
	    {
	        extension: "rtf",
	        mimes: "text\/rtf"
	    },
	    {
	        extension: "xml",
	        mimes: [
	            "application\/xml",
	            "text\/xml",
	            "text\/plain"
	        ]
	    },
	    {
	        extension: "xsl",
	        mimes: [
	            "application\/xml",
	            "text\/xsl",
	            "text\/xml"
	        ]
	    },
	    {
	        extension: "mpeg",
	        mimes: "video\/mpeg"
	    },
	    {
	        extension: "mpg",
	        mimes: "video\/mpeg"
	    },
	    {
	        extension: "mpe",
	        mimes: "video\/mpeg"
	    },
	    {
	        extension: "qt",
	        mimes: "video\/quicktime"
	    },
	    {
	        extension: "mov",
	        mimes: "video\/quicktime"
	    },
	    {
	        extension: "avi",
	        mimes: [
	            "video\/x-msvideo",
	            "video\/msvideo",
	            "video\/avi",
	            "application\/x-troff-msvideo"
	        ]
	    },
	    {
	        extension: "movie",
	        mimes: "video\/x-sgi-movie"
	    },
	    {
	        extension: "doc",
	        mimes: [
	            "application\/msword",
	            "application\/vnd.ms-office"
	        ]
	    },
	    {
	        extension: "docx",
	        mimes: [
	            "application\/vnd.openxmlformats-officedocument.wordprocessingml.document",
	            "application\/zip",
	            "application\/msword",
	            "application\/x-zip"
	        ]
	    },
	    {
	        extension: "dot",
	        mimes: [
	            "application\/msword",
	            "application\/vnd.ms-office"
	        ]
	    },
	    {
	        extension: "dotx",
	        mimes: [
	            "application\/vnd.openxmlformats-officedocument.wordprocessingml.document",
	            "application\/zip",
	            "application\/msword"
	        ]
	    },
	    {
	        extension: "xlsx",
	        mimes: [
	            "application\/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	            "application\/zip",
	            "application\/vnd.ms-excel",
	            "application\/msword",
	            "application\/x-zip"
	        ]
	    },
	    {
	        extension: "word",
	        mimes: [
	            "application\/msword",
	            "application\/octet-stream"
	        ]
	    },
	    {
	        extension: "xl",
	        mimes: "application\/excel"
	    },
	    {
	        extension: "eml",
	        mimes: "message\/rfc822"
	    },
	    {
	        extension: "json",
	        mimes: [
	            "application\/json",
	            "text\/json"
	        ]
	    },
	    {
	        extension: "pem",
	        mimes: [
	            "application\/x-x509-user-cert",
	            "application\/x-pem-file",
	            "application\/octet-stream"
	        ]
	    },
	    {
	        extension: "p10",
	        mimes: [
	            "application\/x-pkcs10",
	            "application\/pkcs10"
	        ]
	    },
	    {
	        extension: "p12",
	        mimes: "application\/x-pkcs12"
	    },
	    {
	        extension: "p7a",
	        mimes: "application\/x-pkcs7-signature"
	    },
	    {
	        extension: "p7c",
	        mimes: [
	            "application\/pkcs7-mime",
	            "application\/x-pkcs7-mime"
	        ]
	    },
	    {
	        extension: "p7m",
	        mimes: [
	            "application\/pkcs7-mime",
	            "application\/x-pkcs7-mime"
	        ]
	    },
	    {
	        extension: "p7r",
	        mimes: "application\/x-pkcs7-certreqresp"
	    },
	    {
	        extension: "p7s",
	        mimes: "application\/pkcs7-signature"
	    },
	    {
	        extension: "crt",
	        mimes: [
	            "application\/x-x509-ca-cert",
	            "application\/x-x509-user-cert",
	            "application\/pkix-cert"
	        ]
	    },
	    {
	        extension: "crl",
	        mimes: [
	            "application\/pkix-crl",
	            "application\/pkcs-crl"
	        ]
	    },
	    {
	        extension: "der",
	        mimes: "application\/x-x509-ca-cert"
	    },
	    {
	        extension: "kdb",
	        mimes: "application\/octet-stream"
	    },
	    {
	        extension: "pgp",
	        mimes: "application\/pgp"
	    },
	    {
	        extension: "gpg",
	        mimes: "application\/gpg-keys"
	    },
	    {
	        extension: "sst",
	        mimes: "application\/octet-stream"
	    },
	    {
	        extension: "csr",
	        mimes: "application\/octet-stream"
	    },
	    {
	        extension: "rsa",
	        mimes: "application\/x-pkcs7"
	    },
	    {
	        extension: "cer",
	        mimes: [
	            "application\/pkix-cert",
	            "application\/x-x509-ca-cert"
	        ]
	    },
	    {
	        extension: "3g2",
	        mimes: "video\/3gpp2"
	    },
	    {
	        extension: "3gp",
	        mimes: [
	            "video\/3gp",
	            "video\/3gpp"
	        ]
	    },
	    {
	        extension: "mp4",
	        mimes: "video\/mp4"
	    },
	    {
	        extension: "m4a",
	        mimes: "audio\/x-m4a"
	    },
	    {
	        extension: "f4v",
	        mimes: [
	            "video\/mp4",
	            "video\/x-f4v"
	        ]
	    },
	    {
	        extension: "flv",
	        mimes: "video\/x-flv"
	    },
	    {
	        extension: "webm",
	        mimes: "video\/webm"
	    },
	    {
	        extension: "aac",
	        mimes: "audio\/x-acc"
	    },
	    {
	        extension: "m4u",
	        mimes: "application\/vnd.mpegurl"
	    },
	    {
	        extension: "m3u",
	        mimes: "text\/plain"
	    },
	    {
	        extension: "xspf",
	        mimes: "application\/xspf+xml"
	    },
	    {
	        extension: "vlc",
	        mimes: "application\/videolan"
	    },
	    {
	        extension: "wmv",
	        mimes: [
	            "video\/x-ms-wmv",
	            "video\/x-ms-asf"
	        ]
	    },
	    {
	        extension: "au",
	        mimes: "audio\/x-au"
	    },
	    {
	        extension: "ac3",
	        mimes: "audio\/ac3"
	    },
	    {
	        extension: "flac",
	        mimes: "audio\/x-flac"
	    },
	    {
	        extension: "ogg",
	        mimes: [
	            "audio\/ogg",
	            "video\/ogg",
	            "application\/ogg"
	        ]
	    },
	    {
	        extension: "kmz",
	        mimes: [
	            "application\/vnd.google-earth.kmz",
	            "application\/zip",
	            "application\/x-zip"
	        ]
	    },
	    {
	        extension: "kml",
	        mimes: [
	            "application\/vnd.google-earth.kml+xml",
	            "application\/xml",
	            "text\/xml"
	        ]
	    },
	    {
	        extension: "ics",
	        mimes: "text\/calendar"
	    },
	    {
	        extension: "ical",
	        mimes: "text\/calendar"
	    },
	    {
	        extension: "zsh",
	        mimes: "text\/x-scriptzsh"
	    },
	    {
	        extension: "7z",
	        mimes: [
	            "application\/x-7z-compressed",
	            "application\/x-compressed",
	            "application\/x-zip-compressed",
	            "application\/zip",
	            "multipart\/x-zip"
	        ]
	    },
	    {
	        extension: "7zip",
	        mimes: [
	            "application\/x-7z-compressed",
	            "application\/x-compressed",
	            "application\/x-zip-compressed",
	            "application\/zip",
	            "multipart\/x-zip"
	        ]
	    },
	    {
	        extension: "cdr",
	        mimes: [
	            "application\/cdr",
	            "application\/coreldraw",
	            "application\/x-cdr",
	            "application\/x-coreldraw",
	            "image\/cdr",
	            "image\/x-cdr",
	            "zz-application\/zz-winassoc-cdr"
	        ]
	    },
	    {
	        extension: "wma",
	        mimes: [
	            "audio\/x-ms-wma",
	            "video\/x-ms-asf"
	        ]
	    },
	    {
	        extension: "jar",
	        mimes: [
	            "application\/java-archive",
	            "application\/x-java-application",
	            "application\/x-jar",
	            "application\/x-compressed"
	        ]
	    },
	    {
	        extension: "svg",
	        mimes: [
	            "image\/svg+xml",
	            "application\/xml",
	            "text\/xml"
	        ]
	    },
	    {
	        extension: "vcf",
	        mimes: "text\/x-vcard"
	    },
	    {
	        extension: "srt",
	        mimes: [
	            "text\/srt",
	            "text\/plain"
	        ]
	    },
	    {
	        extension: "vtt",
	        mimes: [
	            "text\/vtt",
	            "text\/plain"
	        ]
	    },
	    {
	        extension: "ico",
	        mimes: [
	            "image\/x-icon",
	            "image\/x-ico",
	            "image\/vnd.microsoft.icon"
	        ]
	    },
	    {
	        extension: "odc",
	        mimes: "application\/vnd.oasis.opendocument.chart"
	    },
	    {
	        extension: "otc",
	        mimes: "application\/vnd.oasis.opendocument.chart-template"
	    },
	    {
	        extension: "odf",
	        mimes: "application\/vnd.oasis.opendocument.formula"
	    },
	    {
	        extension: "otf",
	        mimes: "application\/vnd.oasis.opendocument.formula-template"
	    },
	    {
	        extension: "odg",
	        mimes: "application\/vnd.oasis.opendocument.graphics"
	    },
	    {
	        extension: "otg",
	        mimes: "application\/vnd.oasis.opendocument.graphics-template"
	    },
	    {
	        extension: "odi",
	        mimes: "application\/vnd.oasis.opendocument.image"
	    },
	    {
	        extension: "oti",
	        mimes: "application\/vnd.oasis.opendocument.image-template"
	    },
	    {
	        extension: "odp",
	        mimes: "application\/vnd.oasis.opendocument.presentation"
	    },
	    {
	        extension: "otp",
	        mimes: "application\/vnd.oasis.opendocument.presentation-template"
	    },
	    {
	        extension: "ods",
	        mimes: "application\/vnd.oasis.opendocument.spreadsheet"
	    },
	    {
	        extension: "ots",
	        mimes: "application\/vnd.oasis.opendocument.spreadsheet-template"
	    },
	    {
	        extension: "odt",
	        mimes: "application\/vnd.oasis.opendocument.text"
	    },
	    {
	        extension: "odm",
	        mimes: "application\/vnd.oasis.opendocument.text-master"
	    },
	    {
	        extension: "ott",
	        mimes: "application\/vnd.oasis.opendocument.text-template"
	    },
	    {
	        extension: "oth",
	        mimes: "application\/vnd.oasis.opendocument.text-web"
	    }
	]
}

module.exports = Helper;