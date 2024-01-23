const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/semos" && req.method === "GET") {
        fs.readFile("domasno.txt", "utf-8", (err, data) => {
            if (err) {
                res.end("Error reading the file!");
            } else {
                res.writeHead(200, {"Content-Type": "text/plain"});
                res.end(data);
            }
        });
    } else if (req.url === "/semos" && req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            fs.appendFile("domasno.txt", body + "/n", "utf-8", (err) => {
                if (err) {
                    res.end("Error writing the file!");
                } else {
                    console.log("Data sucessfully appended to the file", body);
                }
                try {
                    const parsedData = JSON.parse(body);
                    console.log("Parsed data:", parsedData);
                    res.writeHead(200, { "Content-Type": "text/plain"});
                    res.end(JSON.stringify({ result: parsedData}));
            } catch (err) {
                res.end("Error!");
            }
            
        });
    });
    
} else {
    res.end("Not found!");
}
});

server.listen(3000);
