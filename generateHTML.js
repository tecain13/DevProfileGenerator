const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>Document</title>
        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: ${colors[data.color].wrapperBackground};
           padding-top: 100px;
           }
           body {
           background-color: white;
           -webkit-print-color-adjust: exact !important;
           font-family: 'Cabin', sans-serif;
           }
           main {
           background-color: #E9EDEE;
           height: auto;
           padding-top: 30px;
           }
           h1, h2, h3, h4, h5, h6 {
           font-family: 'BioRhyme', serif;
           margin: 0;
           }
           h1 {
           font-size: 4em;
           }
           h2 {
           font-size: 3.5em;
           }
           h3 {
           font-size: 3em;
           text-align: center;
           }
           h4 {
           font-size: 2.5em;
           text-align: center;
           }
           h5 {
           font-size: 2.3em;
           }
           h6 {
           font-size: 2.2em;
           }
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: -50px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: ${colors[data.color].headerBackground};
           color: ${colors[data.color].headerColor};
           padding: 10px;
           width: 95%;
           border-radius: 6px;
           }
           .photo-header img {
           justify-content: center;
           margin-left:450px;
           width: 550px;
           height: 550px;
           border-radius: 50%;
           object-fit: cover;
           margin-top: -75px;
           border: 6px solid ${colors[data.color].photoBorderColor};
           box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
           }
           .photo-header h1, .photo-header h2 {
           width: 100%;
           text-align: center;
           }
           .photo-header h1 {
           margin-top: 10px;
           }
           .links-nav {
           width: 100%;
           text-align: center;
           padding: 20px 0;
           font-size: 2.1em;
           }
           .nav-link {
             font-size: xx-large;
           display: inline-block;
           margin: 5px 10px;
           }
           .workExp-date {
           font-style: italic;
           font-size: .7em;
           text-align: right;
           margin-top: 10px;
           }
           .container {
           padding: 50px;
           padding-left: 100px;
           padding-right: 100px;
           background-color: ${colors[data.color].wrapperBackground};
           }
  
           .row {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-top: 20px;
             margin-bottom: 20px;
           }
  
           .card {
             padding: 20px;
             border-radius: 6px;
             background-color: ${colors[data.color].headerBackground};
             color: ${colors[data.color].headerColor};
             margin: 20px;
           }
           
           .col {
           flex: 1;
           text-align: center;
           }
  
           a, a:hover {
           text-decoration: none;
           color: inherit;
           font-weight: bold;
           }
  
           @media print { 
            body { 
              zoom: 1.00; 
            } 
           }
        </style>
        
        </head>
        
        <body>

        <div class="wrapper">
        <div class="photo-header">
        <div>
            <img src="${data.avatar_url}" alt="Bio image">
            </div>
            <h1>Hello!</h1>
            <h2>My name is ${data.name}!</h2>
            <h4>Currently @ ${data.company}</h4>
            <div class="links-nav">
                <a href="${data.location}">
                    <div class="nav-link">Location: ${data.location}</div>
                </a>
                <a href="${data.html_url}">
                    <div class="nav-link">Github</div>
                </a>
                <a href="${data.blog}">
                    <div class="nav-link">Blog</div>
                </a>
            </div>
        </div>
        <main>
        <br>
            <h3>${data.bio}</h3>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <h3>Public Repositories</h3>
                        <h5>${data.public_repos}</h5>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <h3>Followers</h3>
                        <h5>${data.followers}</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <h3>Github Stars</h3>
                        <h5>${data.stars}</h5>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <h3>Following</h3>
                        <h5>${data.following}</h5>
                    </div>
                </div>
            </div>
        </main>
        <div class="container"></div>

    </div>
       

        </body>
        </html>`


};

module.exports = generateHTML;

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


// ${data.name}
// ${data.location}
//${data.company}
//${data.bio}
//${data.avatar_url}
//${data.blog}
//${data.public_repos}
//${data.stars}
//${data.followers}
//${data.following}
//${data.html_url}
