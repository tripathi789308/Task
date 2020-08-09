const app = require('./App.js');
const http = require('http');
const config = require('./config/config');
const port = config.port;
const server = http.createServer(app);
server.listen(port);
console.log('Server is running at 127.0.0.1:'+ port);