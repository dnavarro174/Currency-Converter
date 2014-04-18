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

var port = Number(process.env.PORT || 8080);
app.listen(port, function () {
    console.log('Listening on ' + port);    
});
