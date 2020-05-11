const axios = require("axios");
const gh = require("@octokit/rest");
const token = process.env.GH_TOKEN;

const get_repo = (username, repo) => {
  // Make a request for a user with a given ID
  axios.get("THE GITHUB API").then(function (response) {
    // handle success
    console.log(response);
  });
};

module.exports = {
  get_repo,
};
