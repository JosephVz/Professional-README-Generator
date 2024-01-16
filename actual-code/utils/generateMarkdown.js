// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License

    This Project is licensed under the ${license}.`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Requirements](#requirements)
* [Usage](#usage)
* [Contact-Me](#contact-me)
* [Contributors](#contributors)
* [Testing](#testing)
${renderLicenseLink(data.license)}
## Decription
${data.description}
## Requirements
${data.require}
## Usage
${data.usage}
## Contact-Me
* Email - ${data.email}
* GitHub - [${data.github}](https://github.com/${data.github}/)
## Contributors
${data.contributors}
## Testing
\`\`\`
${data.test}
\`\`\`
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
