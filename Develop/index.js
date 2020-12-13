const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');


const writeAsync = util.promisify(fs.writeFile);

let createReadMe = ({ name, description, installation, credits, license }) => {
//    return //readmeFileContent
   `<text>#Project Title: ${name}</text>
    <text>#Project Description: ${description}</text>
    <text>#Installation: ${installation}</text>
    <text>#Credits: ${credits}</text>
    <text>#License: ${license}</text>`
}

// array of questions for user
const questions = [
    {   type: "input",
        message: "What is the name of your application?",
        name: "name"
    },
    {   type: "input",
        message: "What is a description of your application?",
        name: "description"
    },
    {   type: "input",
        message: "How is the application installed?",
        name: "installation" 
    },
    {   type: "input",
        message: "Who are your collaborators?",
        name: "credits" 
    },
    {   type: "list",
        message: "Which license?",
        choices: ["GPL", "Apache", "Ms-PL", "MIT", "Other"],
        name: "license"}
];




// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
      console.log(answers);
  
  
      // function to write README file - "data" will pass through the 
      
      const template = createReadMe(answers);
  
      writeAsync('README.md', template);
      
  
  
    })
    .catch(error => {
        console.log(error);
    });
  
}

// function call to initialize program
init();
