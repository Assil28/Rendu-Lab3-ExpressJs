/*var express = require('express');

var serveStatic = require('serve-static');

var app=express()
    .use(serveStatic(__dirname+'/public')).listen(3000);*/


var express = require('express');
var app = express()
    .use(express.static(__dirname + '/public'))
    .listen(3000);
