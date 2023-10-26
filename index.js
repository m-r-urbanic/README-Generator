const inquirer = require('inquirer');
const fs = require('fs');


const generateREADME = ({ title,description,installation,usage,license,contributing,tests,gitHub,emailAddress }) =>
`## ${title}

## Description
${description}

## Table of contents
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Qusetions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
For any questions, please use the following contact methods:
GitHub: ${gitHub}
Email: ${emailAddress}

## Credits
Badges recieved from the following location
https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba`
;

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
        choices: ['Apache 2.0 License [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 'Boost Software License 1.0 [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 'None'],
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
    fs.appendFile('README.md', readMe, (err) =>
    err ? console.error(err) : console.log('The README has been created!')
    );
});
