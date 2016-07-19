//Creating the functions

function bloopAppender(word){

	return word + "bloop"
}

function doubler(word){

	return word + word
}

//Creating the main function

function changeString(word, firstOperation, secondOperation){

	var firstResult  = firstOperation(word)

	var secondResult = secondOperation(firstResult)

	console.log(secondResult)
}

//Calling the function

changeString("I'm a fish!", bloopAppender, doubler)
changeString("I'm a fish!", doubler, bloopAppender)
changeString("I like bloops! ", bloopAppender, bloopAppender)
changeString("wurzle_flurble_", doubler, doubler)