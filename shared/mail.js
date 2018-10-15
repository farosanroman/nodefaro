var request = require("request");
//var messages = require('./messages');
var config = require('./config'); 

var Mail = {
SendGrid: function (criteria, callback) {
console.log(criteria)
var ppa=1;
var mail=
{"id":"V3664204*10",
"message":{"personalizations":
     [
          {"to":[{"email":criteria.mail}]}
     ],
"from":{"email":"defensoresdelademocracia2018@gmail.com"},
"subject":"📣 Prueba de Concepto ",
"content":[{"type":"text/plain","value":criteria.mensaje}]
}
}
console.log(mail)
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
        //console.log(options)
        request(options, function (error, res, flag) {
           
            console.log(flag)
            if (error) {
                callback(error);
            } else {
                callback(null, JSON.parse(flag));
            }
        })

    },
    verify:function(mail,callback){
        var CloudmersiveValidateApiClient = require('cloudmersive-validate-api-client');
 
        var defaultClient = CloudmersiveValidateApiClient.ApiClient.instance;
         
        // Configure API key authorization: Apikey
        var Apikey = defaultClient.authentications['8af20ca2-3637-4466-8020-dec91d76eaf6'];
        //Apikey.apiKey = "8af20ca2-3637-4466-8020-dec91d76eaf6";
        callback(null, {flak:"ok"})
    }
    
}


    
module.exports = Mail;