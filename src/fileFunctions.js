let files = require("fs");

//function to check if a given file exist or not.
function isExist(fileName) {
    return files.existsSync(fileName);
}

//function to read file
function readFile(fileName) {
    return files.readFileSync(fileName, "utf8");
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
//everyone knows about it
function init(fileName, lines, command) {
    if (isExist(fileName)) {
        if (!isNaN(lines)) {
            const splitedData = splitData(readFile(fileName));
            if (command == "head") {
                printLines(splitedData.slice(0, lines));
            }
            if (command == "tail") {
                printLines(splitedData.slice(-lines));
            }
        }
        else {
            console.log(`${command} : invalid number of lines: '${lines}'`);
        }

    }
    else {
        console.log(`${command} : cannot open '${fileName}' for reading: No such file or directory`);
    }
}
//exporting functions 
module.exports = {
    init,
    parseInputs
}
