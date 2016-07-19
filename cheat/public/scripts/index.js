$( document ).ready(function() {

    $.ajax({
		   url: '/loadshortcuts',
		   error: function() {

		   	console.log("Error")
		   },
		   success: function(data) {
		  
		      $('#allpostslist').html(resultaten);

		   },
		   type: 'GET',
			 
		});


});