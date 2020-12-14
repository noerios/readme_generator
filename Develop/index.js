const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js');
const path = require('path');


const writeAsync = util.promisify(fs.writeFile);

let createReadMe = ({ name, description, installation, credits, license }) => {
    return
   
    `title: "${name}",
    description: "${description}",
    installation: "${installation}",
    credits: "${credits}",
    license: "${license}"`
    

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

  
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(),fileName), data, 'utf8'); 
        
    };
    



// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        writeToFile('README.md', md(answers));
        console.log('Successfully created README.md')
     // console.log(answers);
  
  
      // function to write README file - "data" will pass through the 
      
  
    })
    .catch(error => {
        console.log(error);
    });
  
}

// function call to initialize program
init();
