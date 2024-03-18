const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  }
  if (req.url === "/about") {
    res.end(`<h1>I am nothing</h1>`);
  }
});

server.listen(5000);
