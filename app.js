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
    //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    //res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

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
app.get('/parroquias',(req,res)=>{
  var p=
  [
    { "type": "Feature", "properties": { "COD_ESTADO": "01", "ESTADO": "DISTRITO CAPITAL", "CAP_ESTADO": "CARACAS", "COD_MUNIC": "01", "CAP_MUNIC": "CARACAS", "MUNICIPIO": "LIBERTADOR", "COD_PARROQ": "01", "PARROQUIA": "ALTAGRACIA", "CAP_PARROQ": "CARACAS", "NOTA": "", "ID": "010101", "ID_MUNICIP": "0101", "ETIQUETA": "PARROQUIA ALTAGRACIA", "THICKNESS": 2 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -66.905312, 10.555151 ], [ -66.904426, 10.555062 ], [ -66.903831, 10.554948 ], [ -66.903252, 10.554901 ], [ -66.902397, 10.554739 ], [ -66.901306, 10.554555 ], [ -66.900398, 10.554319 ], [ -66.900581, 10.552847 ], [ -66.900681, 10.552170 ], [ -66.900673, 10.551519 ], [ -66.900604, 10.550739 ], [ -66.900650, 10.550373 ], [ -66.900818, 10.550100 ], [ -66.900970, 10.549875 ], [ -66.901039, 10.549451 ], [ -66.900970, 10.548839 ], [ -66.901062, 10.548620 ], [ -66.901382, 10.548518 ], [ -66.901512, 10.548391 ], [ -66.901718, 10.548472 ], [ -66.902008, 10.548407 ], [ -66.902153, 10.548294 ], [ -66.902290, 10.548379 ], [ -66.902519, 10.548475 ], [ -66.902603, 10.548527 ], [ -66.902801, 10.548524 ], [ -66.903114, 10.548598 ], [ -66.903443, 10.548621 ], [ -66.903557, 10.548546 ], [ -66.903763, 10.548437 ], [ -66.903870, 10.548463 ], [ -66.903938, 10.548542 ], [ -66.904106, 10.548603 ], [ -66.904182, 10.548600 ], [ -66.904259, 10.548567 ], [ -66.904320, 10.548404 ], [ -66.904304, 10.548064 ], [ -66.904327, 10.547809 ], [ -66.904236, 10.547545 ], [ -66.904221, 10.547321 ], [ -66.904167, 10.547090 ], [ -66.904114, 10.547004 ], [ -66.904083, 10.546851 ], [ -66.904137, 10.546602 ], [ -66.904137, 10.546362 ], [ -66.904076, 10.546201 ], [ -66.904076, 10.546096 ], [ -66.904114, 10.545863 ], [ -66.904122, 10.545563 ], [ -66.904160, 10.545414 ], [ -66.904236, 10.545235 ], [ -66.904221, 10.545043 ], [ -66.904259, 10.544915 ], [ -66.904266, 10.544781 ], [ -66.904320, 10.544595 ], [ -66.904366, 10.544522 ], [ -66.904404, 10.544186 ], [ -66.904426, 10.543648 ], [ -66.904457, 10.543498 ], [ -66.904449, 10.543339 ], [ -66.904495, 10.543213 ], [ -66.904717, 10.543225 ], [ -66.905136, 10.543147 ], [ -66.905289, 10.543027 ], [ -66.905388, 10.542883 ], [ -66.905464, 10.542704 ], [ -66.905578, 10.542511 ], [ -66.905754, 10.542322 ], [ -66.905884, 10.542249 ], [ -66.906075, 10.542075 ], [ -66.906342, 10.541793 ], [ -66.906433, 10.541616 ], [ -66.906433, 10.541323 ], [ -66.906494, 10.541170 ], [ -66.906555, 10.540976 ], [ -66.906746, 10.540843 ], [ -66.906837, 10.540718 ], [ -66.906967, 10.540572 ], [ -66.907005, 10.540413 ], [ -66.906967, 10.540071 ], [ -66.906959, 10.539860 ], [ -66.906990, 10.539730 ], [ -66.907074, 10.539615 ], [ -66.907120, 10.539280 ], [ -66.907166, 10.539083 ], [ -66.907188, 10.538762 ], [ -66.907219, 10.538541 ], [ -66.907219, 10.538425 ], [ -66.907104, 10.538188 ], [ -66.906670, 10.538053 ], [ -66.906578, 10.537990 ], [ -66.906578, 10.537770 ], [ -66.906609, 10.537494 ], [ -66.906601, 10.537346 ], [ -66.906548, 10.537208 ], [ -66.906410, 10.536965 ], [ -66.906395, 10.536648 ], [ -66.906509, 10.536393 ], [ -66.906540, 10.535972 ], [ -66.906586, 10.535794 ], [ -66.906700, 10.535664 ], [ -66.906837, 10.535655 ], [ -66.906921, 10.535592 ], [ -66.906952, 10.535410 ], [ -66.906906, 10.535180 ], [ -66.906891, 10.534946 ], [ -66.907051, 10.534755 ], [ -66.907265, 10.534575 ], [ -66.907387, 10.534553 ], [ -66.907471, 10.534393 ], [ -66.907478, 10.534145 ], [ -66.907257, 10.533538 ], [ -66.907196, 10.533240 ], [ -66.907196, 10.533063 ], [ -66.907219, 10.532911 ], [ -66.907410, 10.532758 ], [ -66.907623, 10.532600 ], [ -66.907806, 10.532496 ], [ -66.907913, 10.532354 ], [ -66.907989, 10.532228 ], [ -66.907936, 10.531880 ], [ -66.907814, 10.531485 ], [ -66.907723, 10.531317 ], [ -66.907554, 10.531098 ], [ -66.907410, 10.530959 ], [ -66.907333, 10.530846 ], [ -66.907341, 10.530660 ], [ -66.907501, 10.530594 ], [ -66.907791, 10.530589 ], [ -66.907921, 10.530454 ], [ -66.908051, 10.530263 ], [ -66.908096, 10.530023 ], [ -66.908012, 10.529732 ], [ -66.907829, 10.529415 ], [ -66.907578, 10.528802 ], [ -66.907547, 10.528220 ], [ -66.907608, 10.527794 ], [ -66.907570, 10.527305 ], [ -66.907516, 10.526936 ], [ -66.907425, 10.526706 ], [ -66.907486, 10.526029 ], [ -66.907601, 10.525929 ], [ -66.907806, 10.525885 ], [ -66.907974, 10.525894 ], [ -66.908226, 10.525954 ], [ -66.908280, 10.525884 ], [ -66.908310, 10.525660 ], [ -66.908165, 10.525166 ], [ -66.908066, 10.524786 ], [ -66.908005, 10.524614 ], [ -66.908028, 10.524119 ], [ -66.908111, 10.523887 ], [ -66.908119, 10.523711 ], [ -66.908272, 10.523758 ], [ -66.908417, 10.523624 ], [ -66.908539, 10.523655 ], [ -66.908676, 10.523676 ], [ -66.908913, 10.523598 ], [ -66.909088, 10.523429 ], [ -66.909126, 10.523273 ], [ -66.909408, 10.523223 ], [ -66.909767, 10.523141 ], [ -66.910027, 10.523046 ], [ -66.910309, 10.522967 ], [ -66.910629, 10.522908 ], [ -66.910927, 10.522916 ], [ -66.911232, 10.522978 ], [ -66.911530, 10.522998 ], [ -66.911819, 10.523055 ], [ -66.911881, 10.522966 ], [ -66.912025, 10.522707 ], [ -66.912147, 10.522528 ], [ -66.912247, 10.522353 ], [ -66.912300, 10.522157 ], [ -66.912308, 10.522012 ], [ -66.912186, 10.521846 ], [ -66.911919, 10.521635 ], [ -66.911781, 10.521552 ], [ -66.911621, 10.521502 ], [ -66.911514, 10.521415 ], [ -66.911362, 10.521316 ], [ -66.911255, 10.520997 ], [ -66.911148, 10.520878 ], [ -66.911072, 10.520764 ], [ -66.910965, 10.520644 ], [ -66.910713, 10.520575 ], [ -66.910538, 10.520470 ], [ -66.910294, 10.520286 ], [ -66.910217, 10.520037 ], [ -66.909836, 10.519109 ], [ -66.909729, 10.518874 ], [ -66.909546, 10.518664 ], [ -66.909485, 10.518545 ], [ -66.909309, 10.517822 ], [ -66.909180, 10.517563 ], [ -66.908951, 10.517476 ], [ -66.908859, 10.517423 ], [ -66.908745, 10.517323 ], [ -66.908798, 10.516571 ], [ -66.908798, 10.515945 ], [ -66.908661, 10.515617 ], [ -66.908478, 10.515251 ], [ -66.908333, 10.515026 ], [ -66.908211, 10.514905 ], [ -66.908234, 10.514752 ], [ -66.908607, 10.514894 ], [ -66.908600, 10.515216 ], [ -66.908791, 10.515368 ], [ -66.908951, 10.515437 ], [ -66.909248, 10.515517 ], [ -66.909226, 10.515836 ], [ -66.909233, 10.516130 ], [ -66.909256, 10.516303 ], [ -66.909325, 10.516551 ], [ -66.909477, 10.516911 ], [ -66.909630, 10.517021 ], [ -66.909843, 10.517114 ], [ -66.910149, 10.517228 ], [ -66.910378, 10.517272 ], [ -66.910522, 10.516324 ], [ -66.910629, 10.515868 ], [ -66.910721, 10.515336 ], [ -66.910797, 10.514819 ], [ -66.910957, 10.514094 ], [ -66.911079, 10.513276 ], [ -66.911247, 10.512552 ], [ -66.910423, 10.512220 ], [ -66.909981, 10.511946 ], [ -66.910256, 10.510306 ], [ -66.906731, 10.509597 ], [ -66.907471, 10.506113 ], [ -66.920403, 10.508675 ], [ -66.920822, 10.508759 ], [ -66.920769, 10.509102 ], [ -66.919685, 10.515964 ], [ -66.914536, 10.515153 ], [ -66.914360, 10.516833 ], [ -66.914665, 10.517007 ], [ -66.914879, 10.517298 ], [ -66.915039, 10.517543 ], [ -66.915199, 10.517815 ], [ -66.915268, 10.518095 ], [ -66.915275, 10.518385 ], [ -66.915215, 10.518682 ], [ -66.915062, 10.518952 ], [ -66.914871, 10.519196 ], [ -66.914139, 10.519796 ], [ -66.914169, 10.519942 ], [ -66.914162, 10.520181 ], [ -66.913902, 10.520903 ], [ -66.913803, 10.521256 ], [ -66.913712, 10.521412 ], [ -66.913582, 10.521788 ], [ -66.913536, 10.522028 ], [ -66.913528, 10.522320 ], [ -66.913536, 10.522676 ], [ -66.913597, 10.523141 ], [ -66.913566, 10.523878 ], [ -66.913566, 10.524180 ], [ -66.913490, 10.524413 ], [ -66.913345, 10.524651 ], [ -66.913246, 10.524795 ], [ -66.913239, 10.524907 ], [ -66.913246, 10.525055 ], [ -66.913116, 10.525413 ], [ -66.913116, 10.525570 ], [ -66.913033, 10.525904 ], [ -66.913040, 10.526126 ], [ -66.913071, 10.526353 ], [ -66.913124, 10.526607 ], [ -66.913177, 10.527195 ], [ -66.913140, 10.527417 ], [ -66.913124, 10.527601 ], [ -66.913155, 10.527732 ], [ -66.913246, 10.528018 ], [ -66.913353, 10.528409 ], [ -66.913483, 10.528637 ], [ -66.913773, 10.529104 ], [ -66.913941, 10.529606 ], [ -66.914001, 10.529851 ], [ -66.914040, 10.530067 ], [ -66.913917, 10.530143 ], [ -66.913727, 10.530192 ], [ -66.913658, 10.530343 ], [ -66.913506, 10.530777 ], [ -66.913498, 10.530973 ], [ -66.913300, 10.531053 ], [ -66.913155, 10.531133 ], [ -66.913055, 10.531235 ], [ -66.913124, 10.531806 ], [ -66.913124, 10.532026 ], [ -66.913307, 10.532581 ], [ -66.913384, 10.532737 ], [ -66.913574, 10.532834 ], [ -66.913780, 10.533175 ], [ -66.913857, 10.533414 ], [ -66.913895, 10.533705 ], [ -66.913925, 10.533838 ], [ -66.914024, 10.534018 ], [ -66.914055, 10.534276 ], [ -66.914024, 10.534574 ], [ -66.914032, 10.534659 ], [ -66.914093, 10.534842 ], [ -66.914108, 10.535167 ], [ -66.914070, 10.535504 ], [ -66.914101, 10.535753 ], [ -66.914169, 10.535977 ], [ -66.914177, 10.536158 ], [ -66.914162, 10.536688 ], [ -66.914238, 10.536924 ], [ -66.914223, 10.537289 ], [ -66.914245, 10.537607 ], [ -66.914314, 10.537937 ], [ -66.914223, 10.538397 ], [ -66.914261, 10.538605 ], [ -66.914337, 10.538759 ], [ -66.914375, 10.539093 ], [ -66.914444, 10.539350 ], [ -66.914444, 10.539580 ], [ -66.914292, 10.539930 ], [ -66.914276, 10.540052 ], [ -66.914162, 10.540411 ], [ -66.913963, 10.540490 ], [ -66.913780, 10.540635 ], [ -66.913399, 10.541141 ], [ -66.913361, 10.541445 ], [ -66.913406, 10.542021 ], [ -66.913345, 10.542413 ], [ -66.913254, 10.542528 ], [ -66.913231, 10.543328 ], [ -66.913246, 10.543676 ], [ -66.913208, 10.544243 ], [ -66.913155, 10.544502 ], [ -66.913155, 10.544680 ], [ -66.913109, 10.544941 ], [ -66.913078, 10.545248 ], [ -66.913078, 10.545467 ], [ -66.912949, 10.545697 ], [ -66.912926, 10.546174 ], [ -66.912964, 10.546790 ], [ -66.912933, 10.546929 ], [ -66.912842, 10.547076 ], [ -66.912789, 10.547293 ], [ -66.912773, 10.547644 ], [ -66.912720, 10.548227 ], [ -66.912666, 10.548550 ], [ -66.912575, 10.548842 ], [ -66.912590, 10.548961 ], [ -66.912582, 10.549085 ], [ -66.912529, 10.549375 ], [ -66.912521, 10.549550 ], [ -66.912491, 10.549670 ], [ -66.912468, 10.549946 ], [ -66.912414, 10.550236 ], [ -66.912376, 10.550363 ], [ -66.912338, 10.550627 ], [ -66.912224, 10.550683 ], [ -66.912178, 10.550766 ], [ -66.912132, 10.550891 ], [ -66.912117, 10.551044 ], [ -66.912018, 10.551418 ], [ -66.911980, 10.551619 ], [ -66.911926, 10.551826 ], [ -66.911819, 10.551884 ], [ -66.911705, 10.552012 ], [ -66.911629, 10.552153 ], [ -66.911575, 10.552412 ], [ -66.911583, 10.553052 ], [ -66.911308, 10.555697 ], [ -66.910515, 10.555665 ], [ -66.908043, 10.555479 ], [ -66.906883, 10.555478 ], [ -66.905586, 10.555179 ], [ -66.905312, 10.555151 ] ] ] } }
    
    ]
  res.send(p)
  //var ppa=queries.f();
  //console.log(ppa)
  
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
    //screen_name='pazpurua'
    twitter.getUSER(screen_name, function (err, results) {
        var id_str=results.id_str
        console.log(id_str)
        response.end(JSON.stringify(results));
    })
});

  
app.get('/SendMAILSMSTWT', function (criteria, response) {
   var criteria={"key":7,"cedula":"V3664204","celular":"4126340692","mail":"ppazpurua@gmail.com","twt":"pazpurua","encabezado":"Prueba de Concepto II","mensaje":"Prueba de Concepto SMS, TWT, MAIL"}
    //var criteria={"key":7,"cedula":"V888888","celular":"4142863817","mail":"franciscojcastrom@gmail.com","twt":"fcastrom","mensaje":"Te esperan 8.000 observadore"}
    //var criteria={"key":7,"cedula":"V888888","celular":"4264020509","mail":"gboyerizo@gmail.com","twt":"gboyerizo","mensaje":"Te esperan 8.000 observadore"}
   
    var res=[]
    
    mail.SendGrid(criteria, function (err, resultsmail) {
      res.push(resultsmail)
      //sms.SendSMS(criteria, function (err, results) {
      //  res.push(results);
      var screen_name=criteria.twt;
      twitter.getUSER(screen_name, function (err, resultstwt) {
         console.log("resultstwt")
         console.log(resultstwt)
         console.log("resultstwt")
         
           var id_str=resultstwt.id_str
          console.log(id_str)
          res.push(resultstwt)
          var recipientid={recipient_id:id_str,texto:criteria.mensaje}
          if (recipientid!='0'){
             twitter.send_direct_message(recipientid, function (err, resultsdm) {
                res.push(resultsdm)
                response.end(JSON.stringify(res));
             })
          }else{
            response.end(JSON.stringify(res));
          }
         
      })
      
 //})
})//send grid

      
  }); 
  app.get('/GetUsername', function (criteria, response) {
    var criteria={"key":7,"cedula":"V3664204","celular":"4126340692","mail":"ppazpurua@gmail.com","twt":"pazpurua","encabezado":"Prueba de Concepto II","mensaje":"Prueba de Concepto SMS, TWT, MAIL"}
     //var criteria={"key":7,"cedula":"V888888","celular":"4142863817","mail":"franciscojcastrom@gmail.com","twt":"fcastrom","mensaje":"Te esperan 8.000 observadore"}
     //var criteria={"key":7,"cedula":"V888888","celular":"4264020509","mail":"gboyerizo@gmail.com","twt":"gboyerizo","mensaje":"Te esperan 8.000 observadore"}
    
     var res=[]
     
       var screen_name=criteria.twt;
       twitter.getUSER(screen_name, function (err, resultstwt) {
          console.log("resultstwt")
          console.log(resultstwt)
          console.log("resultstwt")
          
            var id_str=resultstwt.id_str
           console.log(id_str)
           res.push(resultstwt)
           var recipientid={recipient_id:id_str,texto:criteria.mensaje}
           if (recipientid!='0'){
            response.end(JSON.stringify(resultstwt));
           }else{
             response.end(JSON.stringify(res));
           }
          
       })
       

       
   }); 
 
  app.post('/SendMAILSMSTWT', function (request, response) {
    //var criteria={"key":7,"cedula":"V3664204","celular":"4126340692","mail":"ppazpurua@gmail.com","twt":"pazpurua","mensaje":"Prueba de Concepto SMS, TWT, MAIL"}
    var criteria=request.body;
    
    
    var res=[]
    
          mail.SendGrid(criteria, function (err, resultsmail) {
            res.push(resultsmail)
            //sms.SendSMS(criteria, function (err, results) {
            //  res.push(results);
            var screen_name=criteria.twt;
            twitter.getUSER(screen_name, function (err, resultstwt) {
               console.log("resultstwt")
               console.log(resultstwt)
               console.log("resultstwt")
               
                 var id_str=resultstwt.id_str
                console.log(id_str)
                res.push(resultstwt)
                var recipientid={recipient_id:id_str,texto:criteria.mensaje}
                if (recipientid!='0'){
                   twitter.send_direct_message(recipientid, function (err, resultsdm) {
                      res.push(resultsdm)
                      response.end(JSON.stringify(res));
                   })
                }
               
            })
            
       //})
     })//send grid
    
      
  });      
app.get('/SendSMS', function (request, response) {
   // var criteria={"key":7,"cedula":"V3664204","celular":"4126340692","mail":"ppazpurua@gmail.com","twt":"pazpurua","mensaje":"Prueba de Concepto 2 SMS, TWT, MAIL"}
    var criteria={"key":7,"cedula":"V888888","celular":"4142863817","mail":"franciscojcastrom@gmail.com","twt":"@fcastrom","mensaje":"Te esperan 8.000 observadore"}
   
    sms.SendSMS(criteria, function (err, results) {
         console.log("app")
         console.log(results)
          response.end(JSON.stringify(results));
     })
      
  });
app.get('/SendGrid', function (request, response) {
    var criteria={"key":7,"cedula":"V3664204","celular":"4126340692","mail":"ppazpurua@gmail.com","twt":"pazpurua","mensaje":"Prueba de Concepto SMS, TWT, MAIL"}
   
  mail.SendGrid(criteria, function (err, results) {
       console.log("finn")
        response.end(JSON.stringify(results));
   })
    
});
app.get('/DM', function (request, response) {
   // var criteria = { "recipient_id": "45031619", "text": "Sr/Srta millenial. Se quiere unir a este futurista grupo de activismo politico?" }
    //160334298
  var id = "45031619"
    
    // id = "92530391"//cartaya
    
   // id = "51886687"//francisco castro
    //id = "1018815783873449985"//poliflsh
    //id="791737378083921921"; //faro tweet
    var T = "Sr/Srta millenial. Se quiere unir a este futurista grupo de activismo politico?\nEn Libertador\n🙋‍https://twitter.com/messages/compose?recipient_id=45031619&welcome_message_id=1101849099102552068";
    T = {
      "event": {
          "type": "message_create",
          "message_create": {
              "target": {
                  "recipient_id": 45031619
              },
              "message_data": {
                  "text": "La cedula V3678737 corresponde al Elector Ramon Jose Gomez Arriaga.\n Vota en el Colegio Simon Bolivar\n  del Estado Miranda, Municipio Baruta, Parroquia Las Minas ",
                  "quick_reply": {
                      "type": "options",
                      "options": [

                          {
                              "label": "✔️CORRECTO y 👍CONFORME",
                              "description": "Esta correocto y estoy conforme con mi centro de votación",
                              "metadata": "GUAIDO4"
                          },
                          {
                              "label": "✔️CORRECTO e 🤚INCONFORME",
                              "description": "Estoy registrado pero quiero mudarme a otro centro de votación",
                              "metadata": "GUAIDO4"
                          },
                          {
                              "label": "❌INCORRECTO",
                              "description": "No es mi centro de votacion tradicional",
                              "metadata": "GUAIDO4"
                          },
                          {
                              "label": "✔️CORRECTO y vivo en el 🌐EXTERIOR",
                              "description": "Estoy registrado pero quiero registrarme en otro centro de votación",
                              "metadata": "GUAIDO4"
                          },
                          {
                              "label": "\uD83D\uDC48 Volver",
                              "description": "Volver",

                              "metadata": "GUAIDO"
                          }
                      ]
                  }
              }
          }
      }
  };
        var criteria={recipient_id:id,texto:T}
        for (i = 0; i < 5; i++) { 
          twitter.send_direct_message(criteria, function (err, results) {
            
            response.end(JSON.stringify(results));
        })
        }
        
    
});
const port=process.env.PORT || 4730
app.listen(port,()=>console.log(`Listening on Port ${port}...`));