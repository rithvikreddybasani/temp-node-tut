const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  console.log(req.method); // This give GET
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>About</h1>");
    res.end();
  }
});

server.listen(5000);
