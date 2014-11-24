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

    function getTowns(countryId, success, error) {
        httpRequester.getJSON(API_URL + 'classes/Town?where={"country":{"__type":"Pointer","className":"Country","objectId":"' + countryId +'"}}', success, error);
    }

    function addTown(data, success, error) {
        httpRequester.postJSON(API_URL + 'classes/Town', data, success, error);
    }

    function deleteTown(countryId, success, error) {
        httpRequester.deleteJSON(API_URL + "classes/Town/" + countryId, success, error);
    }

    function editTown(countryId, data, success, error) {
        httpRequester.putJSON(API_URL + "classes/Town/" + countryId, data, success, error);
    }

    return {
    	getCountry: getCountry,
    	addCountry: addCountry,
    	deleteCountry: deleteCountry,
        editCountry: editCountry,
        getTowns: getTowns,
        addTown: addTown,
        deleteTown: deleteTown,
        editTown: editTown
    };
}());
