"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
  if ("POST" === req.method) {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString().toUpperCase();
        res.end(body);
      });
  }
  res.statusCode = 400;
  res.statusMessage = "Unauthorized";
});

server.listen(process.argv[2]);
