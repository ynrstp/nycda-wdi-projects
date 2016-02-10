$(document).ready(function(){

	$('#searchbox').click(function() {

    	$('#autocomplete').css({
        	'display': 'block'
   		});

    })

    var flag = true

    $('#searchbox').on('keyup', function(){

    	if(flag == true){

    		ajax()
    		flag = false	
    	}

    	else{

    		console.log("flag is false")
    		
    	}

	});

	function ajax(){

		var input = { baby: $('#searchbox').val()}

		$.ajax({
		   url: '/searching',
		   data: input,
		   error: function() {

		   	console.log("Error")
		   },
		   success: function(resultaten) {
		  
		      $('#result').html(resultaten);

		   },
		   type: 'GET',
			 
		});

	}
       
	setInterval(function(){ 

		flag = true
		console.log("flag is true")
		ajax()

	}, 2000);

});