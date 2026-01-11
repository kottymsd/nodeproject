const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Second revision of Deployment is Successful on Ubuntu!');
});

server.listen(3000);
