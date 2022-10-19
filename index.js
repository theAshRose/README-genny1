// TODO: Include packages needed for this application
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
inquirer.prompt([{
    name: "test1",
    message: "message1",
    type: "input1",
}, {
    name: "test2",
    message: "message1",
    type: "test2",
}]).then(function (data) {
    console.log(data)
})