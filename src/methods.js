let filesys = require("fs");

//function to check if a given file exist or not.
function isExist(fileName) {
    return filesys.existsSync(fileName);
}

//function to read file
function readFile(fileName) {
    return filesys.readFileSync(fileName, "utf8");
}

//function to split lines from file
function splitData(fileData) {
    return fileData.split('\n');
}

//function to print N number of lines
function printLines(lines) {
    for (let line in lines) {
        console.log(lines[line]);
    }
}

//return filename and number of lines to print in JSON
function JSONData(file, lines) {
    return { fileName: file, lines: lines }
}

//get user Inputs for filename and lines
function parseInputs() {
    const firstInput = process.argv[2];
    const secondInput = process.argv[3];
    if (secondInput == undefined) {
        return JSONData(firstInput, 10);
    }
    else {
        if (firstInput.startsWith('-')) {
            //const regex = /[^-n]*/g;
            //lines = firstInput.match(regex)[1];
            let nLines = firstInput.replace('-', '').replace('n', '');
            return JSONData(secondInput, nLines);
        }
        else {
            return JSONData(firstInput, 10);
        }
    }
}

//exporting functions 
module.exports = {
    isExist,
    readFile,
    splitData,
    printLines,
    parseInputs
}
