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
/*
var express = require('express');
var fs = require('fs');
var htmlfile = 'index.html';
var app = express();

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Listening on ' + port);
});
*/
