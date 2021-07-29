const http = require('http');
const requestListener = require('./handlers/requestListener')


const server = http.createServer(requestListener)
server.listen(5000);