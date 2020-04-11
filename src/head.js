let files = require("./methods");

let userInput = files.parseInputs();
const fileName = userInput.fileName;
const lines = userInput.lines;

if (files.isExist(fileName)) {
    if (!isNaN(lines)) {
        const fileData = files.readFile(fileName);
        const splitedData = files.splitData(fileData);
        files.printLines(splitedData.slice(0, lines));
    }
    else {
        console.log(`head: invalid number of lines: '${lines}'`);
    }

}
else {
    console.log(`head: cannot open '${fileName}' for reading: No such file or directory`);
}