const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// array of questions for user
inquirer
const questions = [
    //CLient Credentials
    {
        name: 'github',
        message: '*Enter Account Username: ',
        type: 'input',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log(`Account UserName Required`)
            }
        }
    },
    {
        name: 'email',
        message: '*Enter Account Email Adress: ',
        type: 'input',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Account Email Required')
            }
        }
    },
    //Title
    {
        name: `title`,
        message: `*Enter the Title of This Project: `,
        type: `input`,
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log(`Project Title Required`);
                return false;
            }
        }
    },
    //Description of Project
    {
        name: `description`,
        message: `*Enter a Description For This Project: `,
        type: `input`,
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log(`Project Description Required`);
                return false;
            }
        }
    },
    // {
    //Table of Contents at Top    
    // }
    //Installation
    {
        name: `installation`,
        message: `Enter Installation Procedure(Optional): `,
        type: `input`
    },
    //Usage
    {
        name: `usage`,
        message: `*Enter Examples on How to Use This App: `,
        type: `input`,
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log(`Project Usage Required`);
            }
        }
    },
    //Tests
    {

        name: 'test',
        message: 'Enter Possible Testing Methods(Optional): ',
        type: 'input'

    },
    //License
    {
        name: `license`,
        message: `*Enter License For This Project: `,
        type: `list`,
        choices: [`ISC`, `MIT`, `GNU GPLv3`, `IPL 1.0`, `FDL 1.3`],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log(`Choose a Valid License From List`);
                return false;
            }
        }
    },
    //Contributing
    {
        name: 'tests',
        message: 'Enter Methods for Project Contribution(Optional): ',
        type: 'input'
    },
    //Credits
    {
        name: 'credits',
        message: '*Enter Names of Project Contributors(Including Your Own): ',
        type: 'input',
        validate: creditsInput => {
            if (creditsInput) {
                return true;
            } else {
                console.log('Project Contributors Required')
            }
        }
    },
];

// function to write README file
function writeToFile(fileName, markdown) {
    fs.promises.writeFile(`./sample/${fileName}.md`, markdown);
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
