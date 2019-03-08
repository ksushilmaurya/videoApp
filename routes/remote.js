var request = require("request");

exports.remoteSignup = function(params) {
	return new Promise(function(resolve, reject) {
		console.log("params are - ", params);
		var url = "http://gospelcaster.com/stalker_portal/api/accounts";

		var auth = new Buffer("holycinema" + ':' + "00holicinema123123").toString('base64');
		var payload = {
			login : params.username,
			password : params.password
		}
		var headers = {
	         Authorization: 'Basic ' + auth
	    }

		request.post({url:url, form: payload, headers:headers}, function(err,httpResponse,body){ 
			console.log("err - ",err);
			//console.log("httpResponse - ",httpResponse);
			console.log("body - ",body);
			body = JSON.parse(body);

			console.log("body is ------------- ",body, body.status)
			if(body.status =="OK") {
				return resolve();
			} else if(body.status == "ERROR") {
				return reject(body.error)
			} else {
				return reject("some thing went wrong please try after some time");
			}
	 	})	
	})
	
}