const express = require('express');
const axios = require('axios');
const http = require('http');
const path = require('path');

const publicPath = path.join(__dirname + '/../public');
console.log(publicPath);
var app = express();
var server = http.createServer(app);

var getWord = () => {
  axios.get('https://wordsapiv1.p.mashape.com/words/bump/also', {
    headers: {
      'X-Mashape-Key': 'XbG1PmNfMLmsh36XgJ4N0c2pVYmop1dLc41jsnEZChwK4idHQG',
      'Accept': 'application/json'
    }
  }).then((response) => {
    console.log(response.data);
  });
};

getWord();
app.use(express.static(publicPath));
server.listen(3000, () => {
  console.log(`Server started on port 3000`);
});