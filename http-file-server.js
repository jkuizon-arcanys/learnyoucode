"use strict";

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(process.argv[3]);

  readStream.on("open", function () {
    readStream.pipe(res);
  });

  readStream.on("error", function (err) {
    res.end(err);
  });
});

server.listen(process.argv[2]);
