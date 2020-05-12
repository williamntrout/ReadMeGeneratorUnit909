function generateMarkdown(data) {
  return `
# ${data.repositoryName}

![Licenses][![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)][![GitHub version](https://badge.fury.io/gh/williamntrout%2FReadMeGeneratorUnit909.svg)](https://badge.fury.io/gh/williamntrout%2FReadMeGeneratorUnit909)
 

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