var request = require("request");
//var messages = require('./messages');
var config = require('./config'); 
var Mail = {
SendGrid: function (screen_name, callback) {
var mail=
{"id":"V3664204*10",
"message":{"personalizations":
     [
          {"to":[{"email":"ppazpurua@gmail.com"}]}
     ],
"from":{"email":"defensoresdelademocracia2018@gmail.com"},
"subject":"📣 www www ccc",
"content":[{"type":"text/plain","value":"Registrar el formulario del centro de votacion 130301011 UNIDAD EDUCATIVA  ESTADAL ANITA ESPINAL\n\n FORMULARIO SERVICIOS\n\n https://polidata.azurewebsites.net/#observacion?cedula=V21119337"}]
}
}

var url = "https://f18.azurewebsites.net/api/SendGrid?code=iLu4QOAbtZYJI1yrOyrnAnFwSyvX1itKap5LvHFD1W9am2JXbHG3cQ==";
        
        

        // Configure the request
        var options = {
            url: url,
            method: 'POST',
            //json: true,
            headers: {
                'content-type': 'application/json'
            },
           
            body: JSON.stringify(mail)
        }
        console.log(options)
        request(options, function (error, res, flag) {
            console.log(error)
            console.log(flag)
            if (error) {
                callback(error);
            } else {
                callback(null, flag);
            }
        })

    }}
    
        module.exports = Mail;