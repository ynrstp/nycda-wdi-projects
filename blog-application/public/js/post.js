$(document).ready(function(){

	$.ajax({
		   url: '/loadcomments',
		   error: function() {

		   	console.log("Error")
		   },
		   success: function(resultaten) {
		  
		      $('#comments').html(resultaten);

		   },
		   type: 'GET',
			 
		});

})