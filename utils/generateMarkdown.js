function generateMarkdown(data) {
  return `
# ${data.repositoryName}

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
${data.installation}


# Usages


# License
${data.license}


# Contributing Sources
${data.contributors}


# Tests
${data.tests}


# Username
${data.userName}
`
}

module.exports = generateMarkdown;