var httpRequester = (function () {
	function getJSON(url, success, error) {
		var PARSE_APP_ID = "VKrGVYwAxEiFUgesT8TRHcDc4MPk24TTnW6Q4qWa";
		var PARSE_REST_APP_KEY = "TpSQAmneXH1jwW6JHlXs9MNmceHSzuJbaD9PUdQ4";

		$.ajax({
			url: url,
			type: "GET",
			headers: {
				"X-Parse-Application-Id": PARSE_APP_ID,
				"X-Parse-REST-API-Key": PARSE_REST_APP_KEY
			},
			timeout: 5000,
			contentType: "application/json",
			success: success,
			error: error
		});
	}
	
	return {
		getJSON: getJSON,
	};
}());