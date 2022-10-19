// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const getFunctions = require("./utils/generateMarkdown.js")
const fs = require("fs");



// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project/repo?",
    "Please write a short paragraph describing your app:",
    "Please insert a link or file pathway for a screenshot: ",
    "Write a description for your screenshot",
    "Please write installation instructions for your user: ",
    "Please describe usage of your product",
    "Please select a license you wish to user, if any",
    "Please give contribution guidelines to your users here: ",
    "Please give test instructions to your users here: ",
    "Please enter your github profile name",
    "Please enter your email",
];

// .join("/n")
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (event) => { console.log("ERROR") })
 }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
inquirer.prompt([{
    name: "title",
    message: questions[0],
    type: "input",
}, {
    name: "about",
    message: questions[1],
    type: "input",
}, {
    name: "SS",
    message: questions[2],
    type: "input",
}, {
    name: "ssDesc",
    message: questions[3],
    type: "input",
}, {
    name: "installation",
    message: questions[4],
    type: "input",
}, {
    name: "usage",
    message: questions[5],
    type: "input",
}, {
    name: "license",
    message: questions[6],
    type: "list",
    choices: ["none", "Apache", "Boost", "Eclipse", "GNU", "IBM", "ISC", "MIT", "Mozilla", "Perl"]
}, {
    name: "contribution",
    message: questions[7],
    type: "input",
}, {
    name: "instructions",
    message: questions[8],
    type: "input",
}, {
    name: "github",
    message: questions[9],
    type: "input",
}, {
    name: "email",
    message: questions[10],
    type: "input",
}]).then(function (data) {
 console.log(getFunctions(data))
 writeToFile(data.title + ".md", getFunctions(data))
})

///////title
/////////about

