const inquirer = require('inquirer');
const fs = require('fs');

let createReadMe = ({ name, description, installation, credits, license }) => {
    return //readmeFileContent
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

inquirer
  .prompt(questions)
  .then(answers => {
    console.log(answers);


    // function to write README file - "data" will pass through the 
    
    const template = createReadMe(answers);

    fs.writeFile('README.md', template, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    


  })
  .catch(error => {
      console.log(error);
  });



// function to initialize program
//function init() {

//}

// function call to initialize program
//init();
