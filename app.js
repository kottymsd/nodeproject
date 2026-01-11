const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Deployment Successful on Ubuntu!');
});
server.listen(3000);