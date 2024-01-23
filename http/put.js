let products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },  
];

const server = http.createServer((req, res) => {
    if (req.method === "PUT" && req.url === '/replace-product') {
const productID = parseInt(req.url.split('/')[2]);
const productToReplace = products.find((product) => product.id === products)
if (productToReplace) {
    const replacmentData = { id: productID, name: 'New Product Name'}
    const index = products.indexOf(productToReplace);
    products[index] = replacmentData;
    res.writeHead(200,{ "Content-Type": "text/plain" });
    res.end('Go azurirame Vaseto baranje');
}
    }
});

server.listen(8080);