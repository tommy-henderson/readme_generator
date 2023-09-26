// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'describe your project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'what are the steps to install your project?'
        },

        {
            type: 'input',
            name: 'usage',
            message: 'how do you use your project?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'what license did you use for this project?',
            choices: ['MIT', 'CC', 'BSD']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'how do you test this project?'
        },
    ])


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

// test application
