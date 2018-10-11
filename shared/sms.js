
var komiphone = ko.observable("");
var kosms = ko.observable("IN")
var koajax = ko.observable("")
var koerror = ko.observable("")
T555497.home = function (params) {
    "use strict";
    
    var lat1 = 10.5;
    var lon1 = -66.91;
    var viewModel = {
    	miphone:komiphone,
        sms: kosms,
        ajax: koajax,
        error: koerror,
        viewShown: function () {
            var ppa = 1
           //var smsprueba = { 'celular': '04126340692', 'mensaje': 'T99999U9999I999A999N9999', 'lat': lat1, 'lng': lon1, 'multimedia': 'SMS' }
            

        },
        activarOutBox: function () {
           
        	alert("prendiendo outbox")
        	if (SMS) SMS.sendSMS('+584126340692', 'SMS PRUEBA del OUTBOX', function () { }, function () { DevExpress.ui.notify("Error enviado SMS", "error", 500); });

            primerintervaloId = setInterval(intervaloFuncion, 2000);
           
        }
        
        ,
        activar: function () {
        	if (komiphone() == "") { alert("escriba el numero de este  celular") } else
        	{
        		var smsprueba = { 'celular': '+584166202994', 'mensaje': 'T99999U9999I999A999N9999', 'lat': lat1, 'lng': lon1, 'multimedia': 'SMS' }
        		var fecha = new Date();
        		fecha.setHours(fecha.getHours() - 4);
        		var fjson = fecha.toJSON()

        		kosms("[" + fjson + "] " + JSON.stringify(smsprueba))

        		//runAjaxSMS(0, smsprueba)
				/*
        		runAjaxSMS(0, smsprueba).done(function (data) {
        			//alert(JSON.stringify(data))
        		}).fail(function (error) {
        			//alert(JSON.stringify(error))
        			DevExpress.ui.notify("Sin Conexion de Internet..." + JSON.stringify(error), "error", 1000);
        		})
				*/
                document.addEventListener('deviceready', Api, false);
                alert("voy a probar +584126340692")
                if (SMS) SMS.sendSMS('+584126340692', 'SMS PRUEBA al activar', function () { }, function () { DevExpress.ui.notify("Error enviado SMS", "error", 500); });

        	}
        },
    };
	
    

    return viewModel;
};

var primerintervaloId = setInterval(intervaloFuncion, 5000);
//clearInterval(primerintervaloId);
//primerintervaloId = setInterval(intervaloFuncion, 1000);
var i = 0
function intervaloFuncion() {
    alert("intervaloFuncion")
    var mensajes = [];
	var i=10
    var f = new Date().toString()
    //if (i < 2) {

    //    DevExpress.ui.notify("Intervaleo!!!!! " + f, "success", 1000);
    //    i += 1;
    //} else {
        // alert("fin")
        clearInterval(primerintervaloId);
        var criteria = { "nodo": "00" };
		/*
        runAjaxSMSFaro(criteria).done(function (data) {
            var ppa = data;
            mensajes = []
            for (var i = 0; i < data.length; i++) {
                var m = { celular: '+584126340692', mensaje: data[i].encabezado + ": " + data[i].mensaje }
                mensajes.push(m)
                var m = { celular: '+584142863817', mensaje: data[i].encabezado + ": " + data[i].mensaje }
                mensajes.push(m)
            }
            
            sendSMS(mensajes)
            
        }).fail(function (error) {
            DevExpress.ui.notify("Ajax Error" + JSON.stringify(error), "error", 1000);
        })
		*/
        mensajes = []
        for (var i = 0; i < data.length; i++) {
        	var m = { celular: '+584126340692', mensaje:"prueba" }
        	mensajes.push(m)
        	var m = { celular: '+584166202994', mensaje: "prueba" }
        	mensajes.push(m)
        }
        if (SMS) SMS.sendSMS('+584126340692', 'SMS PRUEBA desde el intervalo', function () { }, function () { DevExpress.ui.notify("Error enviado SMS", "error", 500); });
        sendSMS(mensajes)

        primerintervaloId = setInterval(intervaloFuncion, 1000);
    
    //}
}
function sendSMS(mensajes) {
    

    alert(mensajes.length)
    for (var i = 0; i < mensajes.length; i++) {
        var hora = new Date().toString()
        //DevExpress.ui.notify(">>>>>>>>>>> "+i+" " + hora, "success", 1000);
     
        setTimeout(function () {
            DevExpress.ui.notify(i+" Enviando SMS", "success", 1000);

        }, 1000);
        //////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        if (SMS) SMS.sendSMS(mensajes[i].celular, i+") "+mensajes[i].mensaje +" "+hora, function () { }, function () { DevExpress.ui.notify("Error enviado SMS", "error", 500); });
        /////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    }
    i = 0
    primerintervaloId = setInterval(intervaloFuncion, 4000);

}

function Api() {
    //  function initApp() {
    // alert("initApp")
    // if (!SMS) { alert('SMS plugin not ready'); return; }
    if (!SMS) { alert('SMS plugin not ready'); return; }
    if (SMS) SMS.startWatch(function () {
        alert('prendio el watching del SMS');
    }, function () {
        alert('failed to start watching');
    });
    document.addEventListener('onSMSArrive', function (e) {
    	var data = e.data;
    	DevExpress.ui.notify("onSMSArrive:" +  data.address+ " "+data.body);
         var smsin = { "celular": data.address, "mensaje": data.body, "lat": 0, "lng": 0, "multimedia": "SMS" }
        var fecha = new Date();
        fecha.setHours(fecha.getHours() - 4);
        var fjson = fecha.toJSON()
        kosms("[" + fjson + "] " + JSON.stringify(smsin))
        //alert(data.address)
        var miphon = komiphone()
       
        alert(JSON.stringify(smsin))
        alert(data.address+" "+komiphone())
        if (data.address != komiphone()) {
        	var cel58 = data.address;
        	cel58 = "+58" + cel58.substr(1, cel58.length - 1)
        	if (SMS) SMS.sendSMS(cel58, 'SMS PRUEBA desde el onSMSArrive', function () { }, function () { DevExpress.ui.notify("Error enviado SMS", "error", 500); });

            /*
            runAjaxSMS(0, smsin).done(function (data) {
                //alert()
            }).fail(function (error) {
                DevExpress.ui.notify("Ajax Error" + JSON.stringify(error), "error", 1000);
            })
			*/
        } else {
            DevExpress.ui.notify("Mi celular:" + data.address+" NO es procesado", "error", 1000);

        }
 
    });
}

function runAjaxSMSFaro(nodo) {
    var url = "https://f18.azurewebsites.net/api/TwtMensajesSMSGet?code=uddxQpig9hxl80lYLW3gcNzGuT19GBazjLiqFnKOZPWcXffRTVlQQA=="
    var smsstringify = JSON.stringify(nodo);
    var deferred = new $.Deferred();/////////////////////////////////>>>>>>>>>>>>>>>>
    $.ajax(
        {
            type: "POST",

            url: url,
            data: smsstringify,
            async: false,
            dataType: 'json',
            contentType: "application/json",
            success: function (data) {
                DevExpress.ui.notify(JSON.stringify(data), "info", 500);
                 deferred.resolve(data);/////////////////////////////////////////////////>>>>>>>
            },
            error: function (err) {
                koajax("")
                koerror("AJAX:" + JSON.stringify(err))
                deferred.reject(err);//////////////////////////////////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            }
        });
    return deferred.promise();
}
function runAjaxSMS(pos, sms) {

    //pruebagenerica("Ajax Consumo Servicio SMS")

    var url = "http://Faro2016mensajes.azure-mobile.net/api/faromensaje"
    var smsstringify = JSON.stringify(sms);
	//alert(smsstringify)
    var deferred = new $.Deferred();/////////////////////////////////>>>>>>>>>>>>>>>>
    $.ajax(
        {
            type: "POST",

            url: url,
            data:smsstringify,
            async: false,
            dataType: 'json',
            contentType: "application/json",
            //headers: {
            //    'X-ZUMO-APPLICATION': 'zmRXpGXigQumiHIYApTzTzgqdBDBZV86'
            //},
            success: function (data) {
                ///////aqui va el send sms. no se porqe esta comenado
                //>>>>>>if (SMS) SMS.sendSMS(sms.celular, "Verificacion en Faro " + data.mensaje, function () { }, function () { });
                //alert(data)
               //alert(JSON.stringify(data))
                DevExpress.ui.notify(data.mensaje, "info", 500);
                var cel58 = "+58" + sms.celular.substr(1, sms.celular.length - 1)
                koajax(cel58 + " " + data.mensaje + " (" + sms.mensaje + ")")
				koerror("")
                if (SMS) SMS.sendSMS(cel58, data.mensaje + " (" + sms.mensaje + ")", function () { }, function () { DevExpress.ui.notify("Error enviado SMS", "error", 500); });
                deferred.resolve(data);/////////////////////////////////////////////////>>>>>>>
               // outbox.push({ 'celular': sms.celular, 'sms': data.mensaje });

            },
            //error: function (jqXHR, textStatus, errorThrown) {
            //	koerror("AJAX:"+JSON.stringify(err))
            
            //	deferred.reject(textStatus);//////////////////////////////////////////>
            //}
            error: function (err) {
               
            	//alert(JSON.stringify(err))
                if (SMS) SMS.sendSMS('04126340692', 'ajax ERROR', function () { }, function () { DevExpress.ui.notify("Error enviado SMS", "error", 500); });

            	koajax("")
                koerror("AJAX:"+JSON.stringify(err))
                deferred.reject(err);//////////////////////////////////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            }
        });
    return deferred.promise();
}

//var iiii = 0

//function startWatch() {
//    if (SMS) SMS.startWatch(function () {
//        alert('watching');
//    }, function () {
//        alert('failed to start watching');
//    });
//}
//function stopWatch() {
//    if (SMS) SMS.stopWatch(function () {
//        alert('watching stopped');
//    }, function () {
//        alert('failed to stop watching');
//    });
//}
//function sendSMS() {
//    if (SMS) SMS.startWatch(function () {
//        alert('watching');
//    }, function () {
//        alert('failed to start watching');
//    });
//    for (var k = 0; k < 2; k++) {
//        DevExpress.ui.notify("Enviando SMS " + k.toString(), "error", 1000);
//        //ZTE
//        //Esta es la forma de enviar SMS montada para el RR
//        if (SMS) SMS.sendSMS("+584120232015", "prueba de envio " + k.toString(), function () { }, function () { alert("sendSMS") });
//        alert("mensaje")
//        //setTimeout(function () {

//        //if (SMS) SMS.sendSMS(["+584123989943", "+584142657110",], data.body + " " + k.toString(), function () { }, function () { });
//        //}, 1000);

//    }

//}
        