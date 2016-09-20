var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var http = require('http');
app.locals.pretty = true;


var client = require('mysql').createConnection({
  user:'root',
  password:'nbnl2016',
  database:'location'
});

var server = http.createServer(app);

app.listen(8000,function()
{
  console.log('Server running ')
});

app.get('/data/2.5/weather',function(req,res){

  var id = req.query.appid;
  var lat = req.query.lat;
  var lon = req.query.lon;

  console.log('id :' +id +',' +'lat :' + lat + ',' + 'lon :'+lon);

  res.send('237');

});
