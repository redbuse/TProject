var express = require('express');

var mysql = require('mysql');

var route = express.Router();

var connection = mysql.createConnection({
  host:"localhost",
  port:8000,
  user:"root",
  password:"apmsetup",
  database:"nodejs"

});


var sqlQuery = "INSERT INTO member SET ?";
var post = {id:"redbluse",pw:"nbnl2016", name:"ttalk"};

function callback(err,result){
  if(err){
    throw err;
  }

  console.log("Insert Complete!");
  console.log(query.sql);
}

connection.connect();
var query = connection.query(sqlQuery,post,callback);
connection.end();
