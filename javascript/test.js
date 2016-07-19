// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

Only change code below this line
function update(id, prop, value) {
 
   
  if(value !== "" && prop !== "Tracks"){
    
     
  }
  
  if(prop == "Tracks" && value !== ""){
    
    collection
  }
  
 

  return collection;
}

// Alter values below to test your code
update(5439, "artist", "ABBA");
collection[1245].tracks.push("Test")

console.log(collection[1245].tracks)



function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  
  for(var i = 0; i < arr.length; i++) {
    
    for(var j = 0; j < arr[i].length; j++) {


    	console.log(arr[i][j]);
    }  
    
  }
  
  // Only change code above this line
   console.log(product);
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);