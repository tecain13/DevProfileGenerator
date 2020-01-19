var inquirer = require("inquirer");
var axios = require("axios");
var generateHTML = require("./generateHTML");
var electron = require("electron-html-to");

const questions = [
    {
        type: "input",
        message: "Hi there. What is your favorite color?",
        name: "color"
    },

    {
        type: "input",
        message: "What is your Github username?",
        name: "githubprofile"
    }
];


function writeToFile(fileName, data) {

}

function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response.color);
        console.log(response.githubprofile);
        const url = `https://api.github.com/users/${response.githubprofile}`
        axios.get(url).then(function (data) {
            // console.log(data);
            const urlstars = `https://api.github.com/users/${response.githubprofile}/repos`
            axios.get(urlstars).then(function (repos) {
                var stars = 0;
                for (var i = 0; i < repos.data.length; i++) {
                    stars += repos.data[i].stargazers_count;
                }
                console.log(stars);
                const color = response.color;
                const name = data.data.name;
                const location = data.data.location;
                //and keep adding within the squiggly brackets
                console.log(name);
                const html = generateHTML({ stars, color, name })
                console.log(html);
            })
                .catch(function (error) {
                    console.log(error)
                });
        })
    })

};


init();