var express = require('express');
var logger = require('morgan');
var fs = require('fs');
var app = express();

app.use(logger());
app.use(express.static(__dirname + '/public'));

app.use(function(req, res) {
    var html = fs.readFileSync('index.html').toString();
    res.send(html);    
});

app.listen(8080);
console.log('Listening on port 8080...');

