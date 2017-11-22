const express = require('express');
const http = require('http');
const path = require('path');

const publicPath = path.join(__dirname +  '/../public');
console.log(publicPath);
var app = express();
var server = http.createServer(app);

app.use(express.static(publicPath));
server.listen(3000, () => {
	console.log(`Server started on port 3000`);
});