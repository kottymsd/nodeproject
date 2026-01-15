const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Third revision of Deployment is Successful on Linux!');
});

server.listen(3000);
