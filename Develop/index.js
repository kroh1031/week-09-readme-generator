// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation",
    default: "npm i",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
    default: "npm test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
  },
];
inquirer
  .prompt(questions)
  .then((data) => {
    console.log(data);
    console.log(data.title);
    console.log(data.description);
    console.log(data.installation);
    console.log(data.usage);
    console.log(data.license);
    console.log(data.contributing);
    console.log(data.tests);
    console.log(data.email);
    console.log(data.username);
    fs.writeFile("README.md", generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log("Success!!!")
    );
  })
  .catch((err) => console.log(err));
// TODO: Create a function to write README file

// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//Need to do:
//License badge
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a
// notice is added to the section of the README entitled License that explains
// which license the application is covered under
//make ```npm i``` and ```npm test``` work

//Steps to take:
//1. Prompt user with questions
//2. Save data to file
//3. Generate readme
