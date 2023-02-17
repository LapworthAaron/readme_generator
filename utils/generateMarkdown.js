// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.licenseBadge}

  ## Description
  ${data.description}

  ## Table of contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation <a name="installation"></a>
  ${data.installation}

  ## Usage <a name="usage"></a>
  ${data.usage}

  ## License <a name="license"></a>
  ${data.license}<br>
  ${data.licenseFull}

  ## Contributing <a name="contributing"></a>
  ${data.contributing}

  ## Tests <a name="tests"></a>
  These are the tests you need to run:<br>
  ${data.tests}

  ## Questions <a name="questions"></a>
  You can reach me at <a href="https://github.com/${data.questions}">${data.questions}</a>

`;
}

module.exports = generateMarkdown;
