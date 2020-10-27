"use strict";

const http = require("http");

http.get(process.argv[2], (response) => {
  response.setEncoding("utf8");

  let collectedData = "";
  response.on("error", (err) => console.log("error: ", err));
  response.on("data", (data) => {
    collectedData = collectedData.concat(data);
  });
  response.on("end", () => {
    console.log(collectedData.length);
    console.log(collectedData);
  });
});
