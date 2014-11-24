$(document).ready(function(){	

	// Append country and delete button and save button for her.
	var appendCountry = function(country) {
		$('#countries').append('<li>' + 
			country.name + '<button data-id=' + 
			country.objectId + ' class="deleteCountry">Delete</button><button data-id=' + 
			country.objectId + ' class="editCountry">Edit</button><button data-id=' + 
			country.objectId + ' class="saveCountry">Save</button><input type="text" class="changeCountryInput" data-id=' + 
			country.objectId + ' ></li>');
	}

	// Show all countries 
	listCountry();

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

	// Get Countryes from Parse.com
	function listCountry(){
		service.getCountry(
			function(data){
				$('#countries').html("");
				$.each(data.results , function(key,country){
					appendCountry(country);
					$('.saveCountry').hide();
					$('.changeCountryInput').hide();
				})
			},
			function() {
				alert("error list countries");
			}
		);
	};
})