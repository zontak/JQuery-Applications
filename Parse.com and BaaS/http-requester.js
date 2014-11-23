var httpRequester = (function () {

    var PARSE_APP_ID = "VKrGVYwAxEiFUgesT8TRHcDc4MPk24TTnW6Q4qWa";
    var PARSE_REST_APP_KEY = "TpSQAmneXH1jwW6JHlXs9MNmceHSzuJbaD9PUdQ4";

    var headers = {
        "X-Parse-Application-Id": PARSE_APP_ID,
        "X-Parse-REST-API-Key": PARSE_REST_APP_KEY
    };

    function getJSON(url, success, error) {
        $.ajax({
            url: url,
            headers: headers,
            type: "GET",
            timeout: 5000,
            contentType: "application/json",
            success: success,
            error: error
        });
    }

    function deleteJSON(url, success, error) {
        $.ajax({
            url: url,
            headers: headers,
            type: "DELETE",
            timeout: 5000,
            contentType: "application/json",
            success: success,
            error: error
        });
    }

    function postJSON(url, data, success, error) {
        $.ajax({
            url: url,
            headers: headers,
            type: "POST",
            contentType: "application/json",
            timeout: 5000,
            data: JSON.stringify(data),
            success: success,
            error: error
        });
    }

    function putJSON(url, data, success, error) {
        $.ajax({
            url: url,
            headers: headers,
            type: "PUT",
            contentType: "application/json",
            timeout: 5000,
            data: JSON.stringify(data),
            success: success,
            error: error
        });
    }

    return {
        getJSON: getJSON,
        postJSON: postJSON,
        putJSON: putJSON,
        deleteJSON: deleteJSON
    };
}());