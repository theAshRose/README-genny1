// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const getFunctions = require("./utils/generateMarkdown.js")



// TODO: Create an array of questions for user input
const questions = [
    "Would you like to create a proffesional README.md",
    "Fantastic, first lets pick a name for your actual .md file. Note: we will add the '.md' for you.",
    "What is the title of your project/repo?",
    "Please write a short paragraph describing your app:",
    "Please insert a link or file pathway for a screenshot: ",
    "Write a description for your screenshot",
    ""
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
inquirer.prompt([{
    name: "ifUserReadme",
    message: "Would you like to create a proffesional README.md",
    type: "confirm",
}, {
    name: "readmeFileName",
    message: "Fantastic, first lets pick a name for your actual .md file. Note: we will add the '.md' for you.",
    type: "input",
}, {
    name: "title",
    message: "What is the title of your project/repo?",
    type: "input",
}, {
    name: "about",
    message: "Please write a short paragraph describing your app: ",
    type: "input",
}, {
    name: "SS",
    message: "Please insert a link or file pathway for a screenshot: ",
    type: "input",
}, {
    name: "ssDesc",
    message: "Write a description for your screenshot",
    type: "input",
}, {
    name: "screenShot",
    message: "Fantastic, please intsert your pathway or link.",
    type: "input",
}, {
    name: "screenShot",
    message: "Fantastic, please intsert your pathway or link.",
    type: "input",
}, {
    name: "screenShot",
    message: "Fantastic, please intsert your pathway or link.",
    type: "input",
}]).then(function (data) {
    if (data.ifUserReadme === true) {
        const fs = require("fs")
        const pathfinder = require("path")
        fs.writeFile(pathfinder.join("C:\\Users\\dom18\\desktop\\bootcamp\\README-genny1\\" + data.readmeFileName +".md"), "Testresult", (event) => { console.log("ERROR") })
        console.log(getFunctions(data))
    }
})

///////title
/////////about

