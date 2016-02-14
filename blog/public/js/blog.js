$(document).ready(function(){

	$.ajax({
		   url: '/loadmyposts',
		   error: function() {

		   	console.log("Error")
		   },
		   success: function(resultaten) {
		  
		      $('#mypostslist').html(resultaten);

		   },
		   type: 'GET',
			 
		});


	$.ajax({
		   url: '/loadallposts',
		   error: function() {

		   	console.log("Error")
		   },
		   success: function(resultaten) {
		  
		      $('#allpostslist').html(resultaten);

		   },
		   type: 'GET',
			 
		});

})