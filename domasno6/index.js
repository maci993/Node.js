const http = require("http");
const url = require("url");

const {
  welcome,
  test,
  handleUser,
  handleNotFound,
} = require("./handlers/handler");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === "/welcome") {
    welcome(req, res);
  } else if (parsedUrl.pathname === "/test") {
    test(req, res);
  } else if (parsedUrl.pathname === "/email") {
    //http://localhost:3000/email?emailaddress=marina@gmail.com
    handleUser(req, res, parsedUrl.query.emailaddress);
  } else {
    handleNotFound(req, res);
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
