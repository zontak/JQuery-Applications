var jsonp,
	obj;

jsonp = '[{"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family"},{"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"},{"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"}]';
obj = $.parseJSON(jsonp);

$.each(obj, function() {
	$('#myTable tr:last').after('<tr><td>' + 
		this['manufacturer'] + '</td><td>' +
	    this['model'] + '</td><td>' +
	    this['year'] + '</td><td>' +
	    this['price'] + '</td><td>' +
	    this['class'] + '</td></tr>');
});