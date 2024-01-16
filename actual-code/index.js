// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input

const questions = [     
{
    type: "input",
    message: "What is the title of your project?",
    name: "title",
},
{
    type: "input",
    message: "What is your name?",
    name: "name",
},
{
    type: "input",
    message: "Give a description of your project.",
    name: "description",
},
{
    type: "input",
    message: "How do you install your project?",
    name: "installation"
},
{
    type: "input",
    message: "Do you have and Project dependencies?",
    name: "require",
},
{
    type: "input",
    message: "Describe how to use your project.",
    name: "usage",
},
{
    type: "input",
    message: "Can anyone else contribute and how so?",
    name: "contributors",
},
{
    type: "input",
    message: "Do you have any test instructions?",
    name: "test",
},
{
    type: "checkbox",
    message: "What license did you use?",
    name: "license",
    choices: ["MIT", "GPL", "Apache", "GNU", "None"],
},
{
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
},
{
    type: "input",
    message: "What is your Email?",
    name: "email",
},
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating README.");
        writeToFile("README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app

init();
