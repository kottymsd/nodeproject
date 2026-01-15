const http = require('http');
const server = http.createServer((req, res) => {
  res.end('First change revision of Deployment is Successful on Linux!');
});

server.listen(3000);
