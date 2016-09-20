var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var fs = require('fs');

app.locals.pretty = true;
app.set('view engine','jade');
app.set('views','./views_file');
app.use(bodyParser.urlencoded({extended:false}));




// app.get('/topic/new',function(req,res){
//   res.render('new');
// });

app.get(['/topic','/topic/:id'],function(req,res){

  fs.readdir('data/',function(err,files){

    if(err)
    {
        console.log(err);
    }

      var id = req.params.id;
      console.log(id);

        if(id == 'new')
        {
            res.render('new',{topics:files});
        }
        else if(id !== 'new' )
        {

          console.log(id+','+id);
         fs.readFile('data/'+id,'utf8',function(err2,data){
           if(err2)
           {
             console.log(err2);
             res.status(500).send('Internal Server Error2');
           }
           res.render('view',{topics:files, title:id, description:data});
         });
        }
        else if(id =='undefined'){
          res.render('view',{topics:files,title:'Welcome', description:'Helow javascript'});
        }
});
});
app.post('/topic',function(req,res){

  var title = req.body.title;
  var dec = req.body.description;

  fs.writeFile('data/'+title,dec,function(err){
    if(err)
    {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.send('Success');
  });

});

app.listen(8000,function(){
  console.log('Server on!');
});
