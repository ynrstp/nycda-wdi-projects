//part 1
var myBook = {
	
	title: "Hector",
	body: ["Hector the collector,", "collected bits of string,", "collected dolls with broken heads,", "and rusty bells that would not ring."]

}

//part 2
var mySecondBook = {
	
	title: "The sailors",
	body: ["They cannot look out far,", "they cannot look in deep,", "But when was that even a bar,", "to any watch they keep."]

}

//part 3
var formatting = ["page 1", "page 2", "page 3", "page 4", "page5", "page6", "page 7", "page 8"]

var formattedBook = {

}

function printBookElements(book, format){

	for(i = 0; i < book.body.length; i++){

		formattedBook[format[i]] = book.body[i]
	}

	console.log("title:" + book.title)
	console.log(formattedBook)
}

printBookElements(myBook, formatting)
printBookElements(mySecondBook, formatting)