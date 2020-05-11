function generateMarkdown(data) {
  return `
# ${data.authorName}

![Licenses](https://img.shields.io/badge/license-${data.license}-blue.svg)
 

## Table of Contents
  * Installation
  * Usage
  * License
  * Contributing Sources
  * Tests
  * Questions
  

## Description 
${data.description}
  

# Installation
### ${data.installation}


# Usages


# License
${data.license}


# Contributing Sources
 ### ${data.contributors}


# Tests
### ${data.tests}


# Username
${data.userName}
`
}

module.exports = generateMarkdown;

// function generateMarkdown(data) {
//   return 
// # ${data.title}

// `;
// }

// module.exports = generateMarkdown;





// const fs = require("fs");
// const inquirer = require("inquirer");
// const util = require("util");

// function promptUser() {
//   return inquirer.prompt([{
//     type: "input",
//     name: "author-name",
//     message: "What is your name?"
//   }, {
//     type: "input",
//     name: "username",
//     message: "WHat is your GitHub username?"
//   }, {
//     type: "input",
//     name: "repository-name",
//     message: "WHat is your GitHub Repository name?"
//   }, {
//     type: "input",
//     name: "title",
//     message: "What is the title of your project?"
//   }, {
//     type: "input",
//     name: "description",
//     message: "Write a description of your project"
//   }]);
// }



// // function init() {
// //   console.log("Hello from the Readme Generator");
// //   inq.prompt(questions.questions).then(answers => {
// //     console.log(answers)
// //     md_gen(answers)
// //   }).catch(err => {
// //     console.log(err.status)
// //   })
// // }

// // const write_file = (text) => {
// //   fs.writeFile("README.md", text, "utf-8", () => {
// //     console.log("I wrote a file...")
// //   })
// // }


// // function generateMarkdown(data) {
// //   return write_file(`
// // # ${data.title}
// // Hello from the docs
// // `);
// // }


// // module.exports.generateMarkdown = generateMarkdown;