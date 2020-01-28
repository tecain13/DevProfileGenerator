var inquirer = require("inquirer");
var axios = require("axios");
var generateHTML = require("./generateHTML");
var fs = require('fs');
var convertFactory = require('electron-html-to');
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
//axio, electron-html-to, 
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

                // var html = "<html><head></head><body>Test</body></html>"

                console.log(html);
                var conversion = convertFactory({
                    converterPath: convertFactory.converters.PDF,
                    timeout: 30000
                });

                console.log(conversion);

                conversion({ html: html }, function (err, result) {
                    if (err) {
                        return console.error(err);
                    }

                    console.log(result);

                    result.stream.pipe(fs.createWriteStream('resume.pdf'));
                    conversion.kill();

                    // result.stream.pipe(fs.createWriteStream(path.join(__dirname, 'resume.pdf')));
                    // conversion.kill();
                });
            })
                .catch(function (error) {
                    console.log(error)
                });
        })
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