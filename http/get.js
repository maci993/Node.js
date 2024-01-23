// 5. API покани преку HTTP
//     - Имплементирај API со различни патеки и
//      операции (GET, POST, PUT, DELETE) во Node.js
//      и користи HTTP методи за пристап до нив, како
//       и враќање на соодветни одговори за секој метод.
//     - Одговорите може да бидат обични стрингови
//     пр. GET - Добредојдовте, POST - Го обработуваме
//     вашето барање, PUT - Го ажурираме вашето барање,
//     DELETE - Го бришеме ресурсот

const http = require("http");

const products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
  { id: 3, name: "Product C" },
];
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/products") {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(products));
  }
  res.end("Dobredojdovte!")
});
server.listen(3000)