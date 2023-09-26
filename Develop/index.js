// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
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
            choices: ['MIT', 'ISC', 'Apache']
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
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email address?'
        },
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Your README has been created')
        }
    })
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        writeToFile(`${response.title}.md`, response)
    })
}

// Function call to initialize app
init();

// test application