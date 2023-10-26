// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
//  return `# ${data.title}

//`;
//}

const generateMarkdown = ({ title,description,installation,usage,license,contributing,tests,gitHub,emailAddress }) =>
`##${title}

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
Email: ${emailAddress}`
;

module.exports = generateMarkdown;
