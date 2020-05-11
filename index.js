const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const path = require("path");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [{
        type: "input",
        name: "authorName",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "repositoryName",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "tests",
        message: "What wil you be using for a testing framework?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project",
    }, {
        type: "input",
        name: "license",
        message: "What license are you working under?",
    }, {
        type: "input",
        name: "contributors",
        message: "Who made contributions to your project?",
    }, {
        type: "input",
        name: "installation",
        message: "Write a description of your project",
    },
]

function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// function generateMarkDown(answers) {
//     return ` data`
// };

// fs.writeFile("README.md", answers, (err) => {
//   if (err) return console.log(err);
// });

function init() {
    inquirer.prompt(questions).then((inquirerResponse) => {
        const markdown = generateMarkdown(inquirerResponse)

        writeToFile(
            "README.md",
            markdown
        );
    });
}

init();

// promptUser()
//     .then(function (answers) {
//         const data = generateMarkdown(answers);

//         return writeFileAsync("README.md", data);
//     })
//     .then(function () {
//         console.log("Successfully wrote to README.md");
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// fs.writeFile('README.md', answers, (err) {
//     if (err) return console.log(err);
//     console.log(answers);
// });

// const inq = require("inquirer");
// const questions = require("./utils/questions");
// const md_gen = require("./utils/generateMarkdown").generateMarkdown;

// function writeToFile(fileName, data) {}

// function init() {
//     console.log("Hello from the Readme Generator");
//     inq.prompt(questions.questions).then(answers => {
//         console.log(answers)
//         md_gen(answers)
//     }).catch(err => {
//         console.log(err.status)
//     })
// }

// const cool_init = async () => {
//     const answers = await inq.prompt(questions).catch(err => console.log)
// }

// init();