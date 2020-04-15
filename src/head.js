let fileFunc = require("./fileFunctions");

let userInput = fileFunc.parseInputs();
const fileName = userInput.fileName;
const lines = userInput.lines;

fileFunc.init(fileName, lines, "head");