var express = require('express');
var comment = require('./JS/server/connection');
var app = express();
app. use('/comment',comment);
//var bodyParser = require('body-parser');
//var fs = require('fs');

app.locals.pretty = true;
//app.set('view engine','jade');
//app.set('views','./views_file');
//app.use(bodyParser.urlencoded({extended:false}));
