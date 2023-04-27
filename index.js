// TODO: Include packages needed for this application
const fs = require("fs"); //file system
const inquirer = require("inquirer");
const path = require("path"); //taking responses and taking them to the generate markdown file
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please name your Project",
  },

  {
    type: "input",
    name: "description",
    message: "Please decribe the purpose and functionality of this project.",
  },

  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project",
    choices: ["MIT", "APACHE 2.0", "Boost1.0", "MPL2.0", "BSD3", "none"],
  },

  {
    type: "input",
    name: "require",
    message: "list any project dependencies here",
  },

  {
    type: "input",
    name: "usage",
    message: "State the languages or technologies assoicated with this project",
  },

  {
    type: "input",
    name: "creator",
    message: "write your Github username.",
  },

  {
    type: "input",
    name: "name",
    message: "State your full name",
  },

  {
    type: "input",
    name: "email",
    message: "Please input a vailid email address for your account",
  },

  {
    type: "input",
    name: "contributors",
    message:
      "Please list any contributors to the project! (Name of Github Usernames)",
  },

  {
    type: "input",
    name: "test",
    message: "Please provide a walkthrough of the required test if applicable!",
  },
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   return fs.writeSync(path.append(process.cwd(), fileName), data);
// }

// // TODO: Create a function to initialize app
// function init() {
//   inquirer.prompt(questions).then(responses);
//   {
//     console.log("Generating Professional README.md file for user.....");
//     writeToFile("./Develop/README.md", generateMarkdown({ ...responses }));
//   }
// }

// // Function call to initialize app
// init();
