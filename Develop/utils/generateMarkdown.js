// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicense(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    // If there is no license, return an empty string
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicense(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributors](#contributors)
    * [Testing](#testing)
    * [Questions](#questions)
  
## Installation

${data.installation}

## Usage

${data.usage}

## License

This project utilizes: ${data.license}

## Contributors

${data.contributors}

## Testing

${data.tests}

## Questions
Please contact me at ${data.email} if you have any questions. 
Here is a link to my GitHub account: https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
