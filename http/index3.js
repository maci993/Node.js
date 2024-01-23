// 3. Статични датотеки и HTTP сервер
//     - Истражете како можеме кога за одредена рута да вратиме
//      одговор со res.send(), да вратиме одговор кој во себе
//      ќе има HTML, CSS и JS.
//     - Креирај HTTP сервер во Node.js кој ќе сервира статични
//      датотеки како HTML, CSS и JS датотеки, враќајќи ги
//       наодносно пристапувајќи до
//      нив кога се пристапува до соодветните URL патеки.
const http = require('http');

var app = require("express")();
app.get("/index.html", "/style.css", function (req, res) {
  res.sendFile(__dirname + "index.html" + "style.css");
});

server.listen(8080);
