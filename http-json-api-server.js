"use strict";

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  if ("GET" === req.method) {
    const requestUrl = url.parse(req.url);
    const path = requestUrl.pathname;
    const search = requestUrl.search;
    const iso = search.split("=")[1];
    const d = new Date(iso);
    let data = {};

    if ("/api/parsetime" === path) {
      data = {
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds(),
      };
    } else if ("/api/unixtime" === path) {
      data = { unixtime: d.getTime() };
    }
    res.end(JSON.stringify(data));
  }

  res.statusCode = 400;
  res.statusMessage = "Unauthorized";
});

server.listen(process.argv[2]);

// Solution
// 'use strict'
//     const http = require('http')

//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }

//     function unixtime (time) {
//       return { unixtime: time.getTime() }
//     }

//     const server = http.createServer(function (req, res) {
//       const parsedUrl = new URL(req.url, 'http://example.com')
//       const time = new Date(parsedUrl.searchParams.get('iso'))
//       let result

//       if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//       } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//       }

//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))
