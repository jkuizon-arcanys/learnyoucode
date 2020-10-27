'use strict'

const fs = require('fs');

function processFile(fileSource){
    fs.readFile(fileSource, 'utf8', (err, data) => {
        if(err){
            return console.log(err);   
        }
        console.log(data.split('\n').length - 1);
    });
}
processFile(process.argv[2]);