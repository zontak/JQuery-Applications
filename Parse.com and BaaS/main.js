$(document).ready(function(){	
	var counter = 0;
	// Append country and delete button and save button for her.
	var appendCountry = function(country) {
		$('#countries').append('<li class=listClass' + counter + '>' + 
			country.name + '<button data-id=' + 
			country.objectId + ' class="deleteCountry">Delete</button><button data-id=' + 
			country.objectId + ' class="editCountry">Edit</button><input type="text" class="changeCountryInput" data-id=' + 
			country.objectId + ' ><button data-id=' + 
			country.objectId + ' class="saveCountry">Save</button><button data-id=' + 
			country.objectId + ' class="listTowns">List Towns</button><input type="text" class="addTownInput" data-id=' + 
			country.objectId + ' ><button data-id=' + 
			country.objectId + ' class="saveTown">Save</button><button data-id=' + 
			country.objectId + ' class="addTown">Add Town</button></li>');
		counter++;
	}

	// Appent towns and buttons..
	var appendTowns = function(town , listClass) {
		$('.' + listClass).append('<div><span>' + town.name + '</span><button data-id=' + 
			town.objectId + ' class="deleteTown">Delete Town</button><input type="text" class="editTownInput" data-id=' + 
			town.objectId + ' ><button data-id=' + 
			town.objectId + ' class="saveTown">Save</button><button data-id=' + 
			town.objectId + ' class="editTown">Edit Town</button></div>');
	}

	// Show all countries 
	listCountry();

	// list all towns in certain country
	$('#countries').on('click','.listTowns', function(){
		var dataId = $(this).data('id');
		var listClass = $(this).parent().attr('class');
		listTowns(dataId , listClass);
	})

	// Add Towns in certain country 
	$('#countries').on('click', '.saveTown', function() {
		var listClass = $(this).parent().attr('class');
		console.log(listClass);
		var dataId = $(this).data('id');
		console.log(dataId);
		var town = $('.addTownInput[data-id=' + dataId + ']').val();
		console.log(town);
		var data = {"name": town, "country":{"__type":"Pointer","className":"Country","objectId":"" + dataId + ""}};
		console.log(data);
		service.addTown(data,
			function() {
				listTowns(dataId);
				$('.addTownInput[data-id=' + dataId + ']').hide();
				$('.saveTown[data-id=' + dataId + ']').hide();
				$('.addTown[data-id=' + dataId + ']').show();
			},
			function() {
				alert("error add town");
			}
		);
	})

	// Add Countryes in Parse.com
	$('#addCountryButton').on('click', function() {
		var country = $('#addCountry').val();
		var data = {'name': country}; 
		service.addCountry(data,
			function() {
				listCountry();
			},
			function() {
				alert("error add country");
			}
		);
	});

	// Hide EDIT button and show SAVE button
	$('#countries').on('click','.editCountry', function(){
		var dataId = $(this).data('id');
		$('.editCountry[data-id=' + dataId + ']').hide();
		$('.saveCountry[data-id=' + dataId + ']').show();
		$('.changeCountryInput[data-id=' + dataId + ']').show();
	})

	// Hide AddTown button and show SAVE button
	$('#countries').on('click','.addTown', function(){
		var dataId = $(this).data('id');
		$('.addTown[data-id=' + dataId + ']').hide();
		$('.saveTown[data-id=' + dataId + ']').show();
		$('.addTownInput[data-id=' + dataId + ']').show();
	})

	// Hide EditTown button and show SAVE button
	$('#countries').on('click','.editTown', function(){
		var dataId = $(this).data('id');
		$('.editTown[data-id=' + dataId + ']').hide();
		$('.saveTown[data-id=' + dataId + ']').show();
		$('.editTownInput[data-id=' + dataId + ']').show();
	})

	// Edit Town..
	$('#countries').on('click', '.saveTown', function(){
		var dataId = $(this).data('id');
		var newTown = $('.editTownInput[data-id=' + dataId + ']').val();
		var data = {'name': newTown}; 
		service.editTown(dataId, data,
			function() {
				listTowns();
			},
			function() {
			}
		);
	})

	// Edit Country in Parse.com
	$('#countries').on('click', '.saveCountry', function() {
		var dataId = $(this).data('id');
		var newCountry = $('.changeCountryInput[data-id=' + dataId + ']').val();
		var data = {'name': newCountry}; 
		service.editCountry(dataId, data,
			function() {
				listCountry();
			},
			function() {
				alert("error add country");
			}
		);
	})

	// Delete town
	$('#countries').on('click', '.deleteTown', function(){
		var dataId = $(this).data('id');
		var button = $(this);
		service.deleteTown(dataId,
			function() {
				button.parent().remove();
			},
			function() {
				alert("error delete country");
			}
		);
	})

	// Delete Country in Parse.com
	$('#countries').on('click', '.deleteCountry', function() {
		var dataId = $(this).data('id');
		var button = $(this);
		service.deleteCountry(dataId,
			function() {
				button.parent().remove();
			},
			function() {
				alert("error delete country");
			}
		);
	});

	// Get Towns from country..
	function listTowns(countryId , listClass){
		service.getTowns(countryId, 
			function (data) {
				$.each(data.results, function(key,town){
					appendTowns(town, listClass)
					$('.saveTown').hide();
					$('.editTownInput').hide();
				});
			}, function () {
				alert('Getting the towns for country failed!');
			}
		);
	};

	// Get Countryes from Parse.com
	function listCountry(){
		service.getCountry(
			function(data){
				$('#countries').html("");
				$.each(data.results , function(key,country){
					appendCountry(country);
					$('.saveCountry').hide();
					$('.changeCountryInput').hide();
					$('.saveTown').hide();
					$('.addTownInput').hide();
				})
			},
			function() {
				alert("error list countries");
			}
		);
	};
})
