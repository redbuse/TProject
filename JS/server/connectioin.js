var express = require('express');
var mysql = require('mysq');
var router = express.Router();


var connection = mysql.createConnection({
  user : 'root',
  password : 'nbnl2016',
  database : 'tproject',
  host : 'localhost'
});

module.exports = router;
