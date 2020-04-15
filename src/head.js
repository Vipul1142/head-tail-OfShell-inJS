const { init, parseInputs } = require("./fileFunctions");

let userInput = parseInputs();
const fileName = userInput.fileName;
const lines = userInput.lines;

init(fileName, lines, "head");