const fetch = require('node-fetch');
const https = require("https");
// const url = "https://api.github.com/repos/{username/pulls?state=all&page=1&per_page=100";


var username = 'girlscript-blr';

var options = {
host: 'api.github.com',
path: '/repos/' + username + '/code-with-girlscript-bangalore/pulls?state=closed&page=1&per_page=100',
method: 'GET',
headers: {'user-agent': 'node.js'}
};

var request = https.request(options, function(response){
var body = '';
response.on("data", function(chunk){
    body += chunk.toString('utf8');
});
//const obj = JSON.parse(body);
response.on("end", function(){
    console.log(body);
    });
});

request.end();