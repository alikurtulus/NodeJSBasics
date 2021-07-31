const http = require('http');
const {handler} = require('./routes/routes')

const server = http.createServer(handler)
server.listen(3000);