var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var publicPath = path.resolve(__dirname);

// We point to our static assets
app.use(express.static(publicPath));

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("App listening on port: ", port);
});