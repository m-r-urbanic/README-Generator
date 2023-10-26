const inquirer = require('inquirer');
const fs = require('fs');


const generateHTML = ({ title,description,installation,usage,license,contributing,tests,gitHub,emailAddress }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <div>${title}</div>
      <div>${description}</div>
      <div>${installation}</div>
      <div>${usage}</div>
      <div>${license}</div>
      <div>${contributing}</div>
      <div>${tests}</div>
      <div>${gitHub}</div>
      <div>${emailAddress}</div>
    </div>
  </header>
</body>
</html>`;

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
    const htmlPage = generateHTML(answers);


    fs.writeFile('index.html', htmlPage, (err) =>
    err ? console.log(err) : console.log('TEST!')
    );

    // create the new readme file
    //fs.appendFile('README2.md', `${process.argv[0]}\n`, (err) =>
    //err ? console.error(err) : console.log('The README has been created!')
    //);
});

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();


