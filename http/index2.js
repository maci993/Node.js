

// 2. Читање на HTTP барање
//     - Истражете на интернет што прават барањето и
//      одговорот кај клиент-сервер архитектурата
//      (request/response) и кои клучеви ги содржат соодветно
//     - req.query, req.params, req.auth, req.body,
//      req.url - неколку од тие битни параметри
//     - Имплементирај сервер во Node.js што ќе чита
//     податоци од HTTP барањето (на пример, URL параметри,
//         query параметри или податоци од телото на барањето)
//         и ќе ги прикаже во одговорот.
//     - Зависно од типот на барањето дали е GET, POST итн.
//     ќе треба да вратите некој одговор од серверот кон
//     клиентот
const http = require('http');

const data = {
  title: "The Town that Forgot How to Breathe",
  author: "Kenneth J. Harvey",
  note: "I'm currently reading",
};
const server = http.createServer((req, res) => {
  if (req.url === "userSearch" && req.method === "POST") {
    data.find(req.body.title, "The Town that Forgot How to Breathe");
  }
  res.end("This is book-title you searched for");
});

server.listen(8080);



