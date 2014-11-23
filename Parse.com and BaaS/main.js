$(document).ready(function(){	

	var appendCountry = function(country) {
		$('#countryes').append('<li>' + 
			country.name + '<button data-id=' + 
			country.objectId + ' class="deleteCountry">Delete</button><button data-id=' + 
			country.objectId + ' class="editCountry">Edit</button><button data-id=' + 
			country.objectId + ' class="saveCountry">Save</button></li>');
	}

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

	// $('#countryes').on('click','.editCountry', function(){
	// 	$(".editCountry").hide();
	// 	$(".saveCountry").show();
	// })

	// Delete Country in Parse.com
	$('#countryes').on('click', '.deleteCountry', function() {
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
				$('#countryes').html("");
				$.each(data.results , function(key,country){
					appendCountry(country);
					$('.saveCountry').hide();
				})
			},
			function() {
				alert("error list countryes");
			});
	};
})