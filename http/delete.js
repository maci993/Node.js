const http = require('http');

let products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
  ];

const server = http.createServer((req, res) => {
    if (req.method === 'DELETE' && req.url === '/delete-product') {
const productID = parseInt(req.url.split('/')[2]);
const updatedProducts = products.filter((product) => product.id !== products);
products = updatedProducts;
res.writeHead(200, { "Content-Type": "text/plain" });
res.end('Go briseme resursot')
    }
});

server.listen(8080)