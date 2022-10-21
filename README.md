# Readme Generator by Dominic Conradson:

## Description

Here we have a wonderful, wonderful readme generator. [Here is a link to the application](https://thedomconrad.github.io/README-genny1/)
A user may use their console to generate a README through user promts!

## How to use

Run our "index.js" in your own command line - as shown in this [video](https://www.youtube.com/watch?v=Fl2MxkTCOu8). Answer the questions and before you will be a proffesional readme with license and all.

## Screenshot of app

![screenshot](https://cdn.discordapp.com/attachments/408481106040717322/1032886985829928981/unknown.png)

## the Code!
Here we are showcasing the function which writes our README.md into existence, pretty snazzy!


```
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
}, 
```

## Author Links
---[Linkedin](https://www.linkedin.com/in/dominic-conradson-76638b172/)---
[GitHub](https://github.com/theDomConrad/)---
[Portfolio](https://thedomconrad.github.io/Dominic-Conradson-Portfolio/)---