(typeof(PhusionPassenger) !== 'undefined')?PhusionPassenger.configure({ autoInstall: false }):false // For Node On Plesk Panel

var fs = require('fs');
var path = require('path');
var cors = require('cors');
var http = require('http');
var https = require('https');
var express = require('express');
var http_error = require('http-errors');
var body_parser = require('body-parser');
var cookie_parser = require('cookie-parser');
var peerjs_server = require('peer').ExpressPeerServer;
var app = express();
var server = http.createServer(app);

/**
 * Initialize nodeigniter
 */
Socketio = require('socket.io')({path : '/NodeigniterSocketio',transports : ['websocket']}); // initialize socket.io
Config = require('./application/config/config'); // load config
Logger = require('./system/core/Logger'); // load logger
Nodeigniter = require('./system/core/Nodeigniter')({
	express : app,
	db_group : 'default'
}); // load system

/**
 * Express middleware
 */
app.use(express.json()); // Init express json
app.use(express.urlencoded({ extended: true })); // Init express url encoded
app.use(body_parser.json());  // Init body parser
app.use(cookie_parser()); // Init cookie parser
app.use(cors({
	origin : function(origin, callback) {
		callback(null, true);
	},
	credentials: true
})); // Init cors

/**
 * Getting port to listen
 */
var ExpressHTTP = server.listen(process.env.PORT || Config.ports.express.http);
var PeerServer = peerjs_server(ExpressHTTP, {debug:false});

app.use('/NodeigniterPeerJs', PeerServer); // PeerJs listening on HTTP
Socketio.listen(ExpressHTTP); // Socket.io listening on HTTP

if (Config.SSL.enable) {
	if (fs.existsSync(Config.SSL.files.key) && fs.existsSync(Config.SSL.files.cert)) {
		Socketio.listen(https.createServer({
			key : fs.readFileSync(Config.SSL.files.key),
			cert : fs.readFileSync(Config.SSL.files.cert)
		}, app).listen(Config.ports.express.https)); // Server listening on HTTPS

		Logger().Winston.info('SSL enabled');
	} else {
		Logger().Winston.info('SSL enabled, but certificate file not found');	
	}
} else {
	Logger().Winston.info('SSL disabled');
}

PeerServer.on('connection', (client) => {
	console.log(client)
});

PeerServer.on('disconnect', (client) => {
	console.log(client)
});

/**
 * Error handler (404)
 */
app.use((req, res, next) => { 
	next(http_error(404));
});

/**
 * Error handler
 */
app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.json({ status:'error', message:err.message });
});