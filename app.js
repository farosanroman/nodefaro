const express=require('express');
const app=express();
const config = require('./shared/config'); 
var twitter = require('./shared/twitter.js');
var mail = require('./shared/mail.js');
var sms = require('./shared/sms.js');
//const SQL = require('./shared/sqlmodule');
//queries=require('./shared/queries');
//node app.js   <<<<<<<<<
//oJo Application Settings WEBSITE_NODE_DEFAULT_VERSION 6.9.1  oJo oJo

app.use(express.json())
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
        res.send(200);
    }
    else {
        next();
    }
};

app.use(allowCrossDomain);
app.get('/',(req,res)=>{
  res.send("NodeFaro v0.0.0")
  //var ppa=queries.f();
  //console.log(ppa)
  var defensores=[
      {cedula:"V3664204",celular:"04126340692",mail:"ppazpurua@gmail.com",twt:"pazpurua"},
      {cedula:"V3664204",celular:"04126340692",mail:"ppazpurua@gmail.com",twt:"pazpurua"},
    ]
});
app.get('/verifyMAIL', function (request, response) {
    var criteria = { "id": 123 }
    var id = "45031619"
    //de pazpurua a poliflash
    //morocho64
    mail.verify(criteria, function (err, results) {
        
        response.end(JSON.stringify(results));
    })
});
app.get('/getUSER', function (criteria, response) {
    var criteria={"key":7,"cedula":"V3664204","celular":"4126340692","mail":"ppazpurua@gmail.com","twt":"pazpurua","mensaje":"Prueba de Concepto SMS, TWT, MAIL"}
   
    //var criteria = { "id": 123 }
    //var id = "45031619"
    //de pazpurua a poliflash
    //morocho64
    var screen_name=criteria.twt
    twitter.getUSER(screen_name, function (err, results) {
        var id_str=results.id_str
        console.log(id_str)
        response.end(JSON.stringify(results));
    })
});

  
app.get('/SendSMSMAILTWT', function (criteria, response) {
    var criteria={"key":7,"cedula":"V3664204","celular":"4126340692","mail":"ppazpurua@gmail.com","twt":"pazpurua","mensaje":"Prueba de Concepto SMS, TWT, MAIL"}
    var res=[]
    sms.SendSMS(criteria, function (err, results) {
          res.push(results);
          mail.SendGrid(criteria, function (err, resultsmail) {
            res.push(resultsmail)
            var screen_name=criteria.twt;
            twitter.getUSER(screen_name, function (err, resultstwt) {
               console.log("resultstwt")
               console.log(resultstwt)
               console.log("resultstwt")
               
                 var id_str=resultstwt.id_str
                console.log(id_str)
                res.push(resultstwt)
                var recipientid={recipient_id:id_str,texto:criteria.mensaje}
                twitter.send_direct_message(recipientid, function (err, resultsdm) {
                    res.push(resultsdm)
                    response.end(JSON.stringify(res));
                })
               
            })
            
       })
     })
      
  }); 
  app.post('/SendSMSMAILTWT', function (criteria, response) {
    //var criteria={"key":7,"cedula":"V3664204","celular":"4126340692","mail":"ppazpurua@gmail.com","twt":"pazpurua","mensaje":"Prueba de Concepto SMS, TWT, MAIL"};
    var res=[]
    
    sms.SendSMS(criteria, function (err, results) {
          res.push(results);
          mail.SendGrid(criteria, function (err, resultsmail) {
            res.push(resultsmail)
            var screen_name=criteria.twt;
            twitter.getUSER(screen_name, function (err, resultstwt) {
               console.log("resultstwt")
               console.log(resultstwt)
               console.log("resultstwt")
               
                 var id_str=resultstwt.id_str
                console.log(id_str)
                res.push(resultstwt)
                var recipientid={recipient_id:id_str,texto:criteria.mensaje}
                twitter.send_direct_message(recipientid, function (err, resultsdm) {
                    res.push(resultsdm)
                    var ppa={a:1}
                    response.end(JSON.stringify(ppa));
                })
               
            })
            
       })
     })
    
      
  });      
app.get('/SendSMS', function (request, response) {
    var criteria={"key":7,"cedula":"V3664204","celular":"4126340692","mail":"ppazpurua@gmail.com","twt":"pazpurua","mensaje":"Prueba de Concepto SMS, TWT, MAIL"}
   
    sms.SendSMS(criteria, function (err, results) {
          response.end(JSON.stringify(results));
     })
      
  });
app.get('/SendGrid', function (request, response) {
    var criteria={"key":7,"cedula":"V3664204","celular":"4126340692","mail":"ppazpurua@gmail.com","twt":"pazpurua","mensaje":"Prueba de Concepto SMS, TWT, MAIL"}
   
  mail.SendGrid(criteria, function (err, results) {
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
const port=process.env.PORT || 4730
app.listen(port,()=>console.log(`Listening on Port ${port}...`));