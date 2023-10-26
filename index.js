const inquirer = require('inquirer');
const fs = require('fs');


const generateREADME = ({ title,description,installation,usage,license,contributing,tests,gitHub,emailAddress }) =>
    `##${title}
    ${description}
    ${installation}
    ${usage}
    ${license}
    ${contributing}
    ${tests}
    ${gitHub}
    ${emailAddress}`;

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please input your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please input your project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please input your project installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please input your project contribution guidelines:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license:',
        choices: ['Option 1', 'Two', 'Three', 'Four'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please input your project contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide your testing instructions:',
     },
     {
        type: 'input',
        name: 'gitHub',
        message: 'Please provide your GitHub username:',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Please provide your email address:',
    },

])

.then((answers) => {
    const readMe = generateREADME(answers);

    //create the new readme file
    fs.appendFile('README2.md', readMe, (err) =>
    err ? console.error(err) : console.log('The README has been created!')
    );
});

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();


