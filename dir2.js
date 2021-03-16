const React = require('react')

const fs = require("fs");
let files = []
let arrayOfFiles = fs.readdirSync("Ambeint Voltages");

arrayOfFiles.forEach(f  =>{
    files.push(f)
})


//console.log(files[8])
module.exports = files;



