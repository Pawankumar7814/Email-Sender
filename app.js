//All require modules
var express = require('express');
var http = require('http');
var ejs = require('ejs');

//Creating application
var app = express();

//View engine
app.set('view engine', 'ejs');

//Assign port number
var port = 2100 | process.env.port;

//Route
app.use('/', require('./routes/route'));

//Start server
http.createServer(app).listen(port, () => {
    console.log(port);
});