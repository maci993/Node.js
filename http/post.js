const http = require('http')

let products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },  
];

const server = http.createServer((req,res) => {
    if (req.method === 'POST' && req.url === '/feedback') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk/toString();
        });
        req.on('end', () => {
            const feedbackData = parse(body);
            res.writeHead(200, { 'Content-Type': 'text/plain'});
            res.end('Go obrabotuvame vaseto baranje')
        });
    }
});
server.listen(8080);