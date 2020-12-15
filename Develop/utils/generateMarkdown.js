// function to generate markdown for README
function generateMarkdown(data) {
  return `#Project Name: ${data.name},
  #Project Description: ${data.description},
  #Installation: ${data.installation},
  #Credits:  ${data.credits},
  #License: ${data.license}

`;
}

module.exports = generateMarkdown;
