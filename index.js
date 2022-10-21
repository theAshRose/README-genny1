
const inquirer = require("inquirer")//inquirer
const getFunctions = require("./utils/generateMarkdown.js")//using our "generateMarkdown.js" file
const fs = require("fs"); //pulling fs node in



const questions = [//useless array i could have skipped
    "What is the title of your project/repo?",
    "Please write a short paragraph describing your app:",
    "Please write installation instructions for your user: ",
    "Please describe usage of your product",
    "Please select a license you wish to user, if any",
    "Please give contribution guidelines to your users here: ",
    "Please give test instructions to your users here: ",
    "Please enter your github profile name",
    "Please enter your email",
];

function writeToFile(fileName, data) {///writefile function
    fs.writeFile(fileName, data, (event) => { console.log("COMPLETE!") })
 }

function init() {}

//questions for user
init();
inquirer.prompt([{
    name: "title",
    message: questions[0],
    type: "input",
}, {
    name: "about",
    message: questions[1],
    type: "input",
},  {
    name: "installation",
    message: questions[2],
    type: "input",
}, {
    name: "usage",
    message: questions[3],
    type: "input",
}, {
    name: "license",
    message: questions[4],
    type: "list",
    choices: ["none", "Apache", "Boost", "Eclipse", "GNU", "IBM", "ISC", "MIT", "Mozilla", "Perl"]
}, {
    name: "contribution",
    message: questions[5],
    type: "input",
}, {
    name: "instructions",
    message: questions[6],
    type: "input",
}, {
    name: "github",
    message: questions[7],
    type: "input",
}, {
    name: "email",
    message: questions[8],
    type: "input",
}]).then(function (data) {
 writeToFile("sampleREADME.md", getFunctions(data))//calling function from other page with data from this one
})