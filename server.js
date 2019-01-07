var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname + '/dist')).listen(3000, function() {
  console.log('Server running on port 3000...');
});
