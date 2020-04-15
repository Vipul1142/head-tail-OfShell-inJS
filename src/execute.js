const { init, parseInputs } = require("./fileFunctions");

const userInput = parseInputs();
const fileName = userInput.fileName;
const lines = userInput.lines;

function exec(command) {
    init(fileName, lines, command)
}

module.exports = { exec }