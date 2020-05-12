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
        message: "What will you be using for a testing framework?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project?",
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
        message: "Which dependencies do you want to use?",
    },
]

function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}


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