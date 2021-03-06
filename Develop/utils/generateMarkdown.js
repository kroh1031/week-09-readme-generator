// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "APACHE 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GPL 3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "BSD 3") {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === "APACHE 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === "GPL 3.0") {
    return `https://img.shields.io/badge/License-GPLv3-blue.svg`;
  } else if (license === "BSD 3") {
    return `https://img.shields.io/badge/License-BSD%203--Clause-blue.svg`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
## License    

This project is licensed under the ${license} license.  `;
  } else {
    return "";
  }
}
// Function that returns the license section in the Table of Contents only if the user provides a valid license...
// If there is no license, return the Table of Contents without a license section
function renderTableLicense(license) {
  if (license !== "None") {
    return `
## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)
    `;
  } else {
    return `
## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)
    `;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  ${renderLicenseBadge(data.license)}  

## Description

${data.description}
${renderTableLicense(data.license)}
## Installation

To install necessary dependencies, run the following command:  
\`\`\`
${data.installation}
\`\`\`

## Usage  

${data.usage}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing

${data.contributing}

## Tests
 
To run tests, run the following command:  
\`\`\`
${data.tests}
\`\`\`

## Questions  

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }.  
  You can find more of my work at [${data.username}](https://github.com/${
    data.username
  }).
`;
}

module.exports = generateMarkdown;
