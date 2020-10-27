'use strict'

const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;

async function processFile(){
    const files = await fsPromises.readdir(process.argv[2]);
    const filteredFiles = files.filter((file) => 
        path.extname(file).toLowerCase() === `.${process.argv[3]}`
    );

    for(let file of filteredFiles){
        console.log(file);
    }
}
processFile();