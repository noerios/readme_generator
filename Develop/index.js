// array of questions for user
const questions = [
    {   type: "input",
        prompt: "What is the name of your application?",
        section: "project name"
    },

    {   type: "input",
        prompt: "What is a description of your application?",
        section: "description"
    },
    {   type: "input",
        prompt: "How is the application installed?",
        section: "installation" 
    },
    {   type: "input",
        prompt: "Who are your collaborators?",
        section: "credits" 
    },
    {   type: "list",
        prompt: "Which license?",
        choices: ["GPL", "Apache", "Ms-PL", "MIT", "Other"],
        section: "license"}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
