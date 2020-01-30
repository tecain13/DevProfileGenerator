var inquirer = require("inquirer");
var axios = require("axios");
var generateHTML = require("./generateHTML");
var fs = require('fs');
var pdf = require('html-pdf');
var path = require('path');

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
            console.log(data.data);
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

                console.log(name);
                const html = generateHTML({ stars, color, ...data.data });



                console.log(html);


                var options = { format: 'Letter' };

                pdf.create(html, options).toFile('./githubresume.pdf', function (err, res) {
                    if (err) return console.log(err);
                    console.log(res);
                });


            });
        })
            .catch(function (error) {
                console.log(error)
            });
    })
};

// Profile image
// User name
// Links to the following:
// User location via Google Maps
// User GitHub profile
// User blog
// User bio
// Number of public repositories
// Number of followers
// Number of GitHub stars
// Number of users following


init();