var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.locals.pretty = true;

app.set('view engine','jade');
app.set('views','./views');
app.use(express.static(path.join(__dirname , '/public')));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/getTicketList',function(req,res){
  var userid = req.query.userid;
  var langitude = req.query.lat;
  var longitude = req.query.lon;
  console.log('user id :' + userid + " lan " + langitude + " lng :"+ longitude);
  


});
app.listen(8000,function(){
console.log('Connected 8000 port');

});
