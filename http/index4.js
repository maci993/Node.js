// 4. Испраќање на POST барања и обработка на податоци
//     - Направи сервер во Node.js кој ќе ги прифаќа POST
//     барањата на
//     некоја рута и ќе ги обработува податоците што се
//     праќаат во телото на барањето, па потоа ги дава на
//     клиентот.

const http = require('http');

const data = {
  title: "The Town that Forgot How to Breathe",
  author: "Kenneth J. Harvey",
  note: "I'm currently reading",
};
const server = http.createServer((req, res) => {
  if (req.url === "/book" && req.method === "POST") {
    data.find(req.body.title, "The Town that Forgot How to Breathe");
  }
  res.end("This is book-title you searched for");
});

server.listen(8080);
