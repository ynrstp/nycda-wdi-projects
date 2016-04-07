$( document ).ready(function() {

	$('#generateBtn').click(function() {

		console.log('button clicked')

		var number = $('#loremlength').val()

    	generate(number)
    })

    $('#1').click(function() {

    	generate(1)
    })

    $('#2').click(function() {

    	generate(2)
    })

    $('#10').click(function() {

    	generate(10)
    })

    $('#100').click(function() {

    	generate(100)
    })

	function generate(number){

		console.log('generating')

		$.ajax({
			   url: '/generate',
			   data: { number: number },
			   error: function() {

			   	console.log("Error")
			   },
			   success: function(lorem) {

			   		console.log(lorem)
			  
			      $('#lorem').html(lorem);

			   },
			   type: 'GET',
				 
		});

	}

	function wordlist(){

		$.ajax({
			   url: '/wordlist',
			   error: function() {

			   	console.log("Error")
			   },
			   success: function(wordlist) {

			   		console.log(wordlist)

			   		var cList = $('#wordlist')

					$.each(wordlist, function(i){
						
					    var li = $('<li/>')
					        .addClass('list-group-item')
					        .appendTo(cList);
					    var ppp = $('<p/>')
					        .text(wordlist[i])
					        .appendTo(li);
					});

			   },
			   type: 'GET',
				 
		});

	}

	$('#dingetjes').click(function() {

    	$.ajax({
			   url: '/loaddingetjes',
			   error: function() {

			   	console.log("Error")
			   },
			   success: function() {

			   		wordlist()

			   },
			   type: 'GET',
				 
		});
    })

	$('#food').click(function() {

    	$.ajax({
			   url: '/loadfood',
			   error: function() {

			   	console.log("Error")
			   },
			   success: function() {

			   		wordlist()

			   },
			   type: 'GET',
				 
		});
    })

    $('#empty').click(function() {

    	$.ajax({
			   url: '/clearlist',
			   error: function() {

			   	console.log("Error")
			   },
			   success: function() {

			   		wordlist()

			   },
			   type: 'GET',
				 
		});
    })






	wordlist()
	


});