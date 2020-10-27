"use strict";
const fs = require("fs");
const path = require("path");

module.exports = function (sourceFile, extFilter, callback) {
  fs.readdir(sourceFile, (err, data) => {
    if (err) {
      return callback(err);
    }

    const filteredFiles = data.filter(
      (file) => path.extname(file).toLowerCase() === `.${extFilter}`
    );

    callback(null, filteredFiles);
  });
};
