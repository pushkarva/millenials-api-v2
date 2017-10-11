// The Essentials
var fs = require('fs');

//-----------------------------------------------------------------------------
// MAIN CODE BLOCK
//-----------------------------------------------------------------------------

// Exports the 'route' function
module.exports = function route(dirname, server) {
  var files = fs.readdirSync(dirname);

  files.forEach(function (file) {
    var filepath = dirname + '/' + file;
    if (fs.statSync(filepath).isDirectory()) {
      route(filepath, server);
    } else {
      var controller = require(filepath);
      controller.route(server);
    }
  });
};
