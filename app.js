const express=require('express');
const app=express();
const config = require('./shared/config'); 
var twitter = require('./shared/twitter.js');
var mail = require('./shared/mail.js');
//const SQL = require('./shared/sqlmodule');
//queries=require('./shared/queries');
//node app.js   <<<<<<<<<
//oJo Application Settings WEBSITE_NODE_DEFAULT_VERSION 6.9.1  oJo oJo

app.use(express.json())
app.get('/',(req,res)=>{
  res.send("NodeFaro v0.0.0")
  //var ppa=queries.f();
  //console.log(ppa)
  var defensores=[
      {cedula:"V3664204",celular:"04126340692",mail:"ppazpurua@gmail.com",twt:"pazpurua"},
      {cedula:"V3664204",celular:"04126340692",mail:"ppazpurua@gmail.com",twt:"pazpurua"},
    ]
});
app.get('/getUSER', function (request, response) {
    var criteria = { "id": 123 }
    var id = "45031619"
    //de pazpurua a poliflash
    //morocho64
    twitter.getUSER('poliflash', function (err, results) {
        var id_str=results.id_str
        console.log(id_str)
        response.end(JSON.stringify(results));
    })
});

  
  app.get('/DM', function (request, response) {
    var criteria = { "recipient_id": "45031619", "text": "Pruba Masiva" }
    //160334298
    var id = "45031619"
    
     id = "92530391"//cartaya
    
    id = "51886687"//francisco castro
    id = "1018815783873449985"//poliflsh
    var T = "Envio de Mensaje Informativo\n";
   
    
    
        var criteria={recipient_id:id,texto:T}
        twitter.send_direct_message(criteria, function (err, results) {
            
            response.end(JSON.stringify(results));
        })
    
});
app.get('/SendGrid', function (request, response) {
  var criteria={recipient_id:1,texto:1}
  mail.SendGrid(criteria, function (err, results) {
        response.end(JSON.stringify(results));
   })
    
});
const port=process.env.PORT || 4730
app.listen(port,()=>console.log(`Listening on Port ${port}...`));