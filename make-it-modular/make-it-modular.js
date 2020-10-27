"use strict";

const mymodule = require("./mymodule");

function callback(err, filteredFiles = []) {
  if (err) {
    return console.log("Error found");
  }

  for (let file of filteredFiles) {
    console.log(file);
  }
}

mymodule(process.argv[2], process.argv[3], callback);
