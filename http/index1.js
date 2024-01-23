// 1. Креирање на сервер во Node.js
//     - Напиши сервер во Node.js кој ќе слуша на
//      одредена порта и ќе враќа порака
//      "Добредојдовте на серверот!" кога се
//      пристапува на основната патека /.

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Dobredojdovte na serverot!");
});

server.listen(8080);