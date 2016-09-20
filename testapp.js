var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');


var app = express();
app.locals.pretty = true;

app.set('view engine','jade');
app.set('views','./views');
app.use(express.static(path.join(__dirname , '/public')));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/form',function(req,res){
  res.render('form');
});

app.get('/form_receiver',function(req,res){
  var title = req.query.title;
  var dec = req.query.description;
  res.send(title+','+ dec);
});

app.post('/form_receiver',function(req,res){

  var title = req.body.title;
  var dec = req.body.description;
    res.send(title+','+ dec);
});
app.get('/topic/:id',function(req,res){

 var param = req.param.id;

res.send(param);
});
app.get('/topic/:id/:mode',function(req,res){
res.send(req.params.id+','+ req.params.mode);
});

app.get('/template',function(req,res){
  console.log('template');

  res.render('temp',{time:Date(),_title:'Jade'});

});
app.get('/',function (req,res){

  res.send("Welcome express home");
  console.log('Welcome express home');
  //data.count++;
  //res.render('my_first_ejs',data);

});


app.get('/dynamic', function (req, res) {

  var lis ='';

  var time = Date();
  for(var i=0; i<5;i++){
    lis = lis + '<li>coding</li>';
  }
  var output = `
<!DOCTYPE html>
<html>
 <head>
  <meta charset ="utf-8">
  <title></title>
 </head>
 <body>
    Hello, Static!
    <ul>
    ${lis}
    </ul>
    ${time}
 </body>
</html>`;
res.send(output);
});

app.get('/login',function (req,res){

  res.send("Login please");
  console.log('Login please');
  //data.count++;
  //res.render('my_first_ejs',data);

});
app.listen(8000,function(){
console.log('Connected 8000 port');

});
