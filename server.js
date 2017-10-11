
var Router = require('restify-router').Router;
var routerInstance = new  Router(); // The restify-router to manage routes for our API
var restify = require('restify'); // The main restify library for our API
var cluster = require('cluster'); // To take advantage of multi-core systems

var config = require('config'); // A convenient module to read config files
var os = require('os'); // A convenient module to access os functions
var path = require('path'); // Library to work with file paths
var passport = require('passport'); // Authentication and authorization

// Configuration
// The variables below are used throughout the program and are therefore
// declared at the top-level.  We will later discuss scopes and how they
// apply to NodeJS.
var numCPUs = require('os').cpus().length;
var serviceConfig = config.get('general.service');
var httpConfig = config.get('connections.http');



//-----------------------------------------------------------------------------
// MAIN CODE BLOCK
//-----------------------------------------------------------------------------

// Fork the cluster.
// By default NodeJS makes use of a single CPU only which is a performance
// limitation in multi-CPU or multi-core systems.  The code below will assist
// NodeJS to make use of all CPUs and cores for maximum performance.
if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', function(deadWorker, code, signal) {
    var worker = cluster.fork();

   console.log('worker ' + deadWorker.process.pid + ' died');
   console.log('worker ' + worker.process.pid + ' spawned');
  });
} else {
  // Create the server.
  server = restify.createServer({
    name: 'millenials-api',
    version: '1.0.0'
    });
  server.use(restify.CORS({
    origins: [ '*' ],
    methods: ['GET,PUT,POST,DELETE,PATCH,MERGE'],
    headers: ['Content-Type']
  }));
  
  server.use(restify.queryParser());
  server.use(restify.bodyParser({
    maxBodySize: 0,
    mapParams: true,
    mapFiles: false,
    overrideParams: false,
    multipartHandler: function(part) {
      part.on('data', function(data) {
        // TODO - Do something with multipart data
      });
    },
    multipartFileHandler: function(part) {
      part.on('data', function(data) {
        // TODO - Do something with multipart data
      });
    },
    keepExtensions: false,
    uploadDir: os.tmpdir(),
    multiples: true
  }));
  server.use(restify.gzipResponse());
  server.use(passport.initialize());
  //server.use(passport.session());

  require('./route.js')(__dirname+'/routes', server);

  // Start the server and set it to listen on the port defined in the config.
  server.listen(httpConfig.port, function startServer() {
  console.log('HTTP server listening on port '+httpConfig.port);
  });

}

