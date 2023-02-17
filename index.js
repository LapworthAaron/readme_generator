const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {type: 'input',
        message: 'What is the project called?',
        name: 'title'},
    {type: 'input',
        message:"Please fill in the description:",
        name: 'description'},
    {type: 'input',
        message: 'Please add contents(| seperated)',
        name: 'contents'},
    {type: 'input',
        message: 'How do you install it?',
        name: 'installation'},
    {type: 'input',
        message: 'Who do you use it?',
        name: 'usage'},
    {type: 'input',
        message: 'What licence does it use?',
        name: 'license'},
    {type: 'input',
        message: 'Are you open to contributions?',
        name: 'contributing'},
    {type: 'input',
        message: 'What tests do you have?',
        name: 'tests'},
    {type: 'input',
        message: 'What is your github username?',
        name: 'questions'}
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    let responseObj = {};
    inquirer
        .prompt(questions)
        .then((response) => {
            responseObj = response
            console.log(response)
            writeToFile("readme_test.md",generateMarkdown(responseObj));
        });

    
}

// function call to initialize program
init();
