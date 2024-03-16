const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  res.end("<h1>Bai Tap Nhom Cloud Computing and IoT</h1><br/><h3>Ly Thanh Hoang</h3><br><h3>Nguyen Thanh Thien</h3><br><h3>Duong Thanh Hoai<h3><br><h3>Phan Vo Dinh Hien</h3>");
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
