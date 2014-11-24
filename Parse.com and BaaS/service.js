var service = (function() {

	'use strict'

	function getCountry(success, error) {
        httpRequester.getJSON(API_URL + "classes/Country", success, error);
    }

    function addCountry(data, success, error) {
        httpRequester.postJSON(API_URL + "classes/Country", data, success, error);
    }

    function deleteCountry(countryId, success, error) {
        httpRequester.deleteJSON(API_URL + "classes/Country/" + countryId, success, error);
    }

    function editCountry(countryId, data, success, error) {
        httpRequester.putJSON(API_URL + "classes/Country/" + countryId, data, success, error);
    }

    return {
    	getCountry: getCountry,
    	addCountry: addCountry,
    	deleteCountry: deleteCountry,
        editCountry: editCountry
    };
}());