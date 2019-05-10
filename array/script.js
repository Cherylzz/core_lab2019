var myArray = [ "DOG", 
				"CAT", 
				"RABBIT", 
				"MOUSE", 
				"BIRD"
			   ];

myArray.push("TIGER"); 

var myOtherArray = [1, 2, 3, 4, 5, 6, 7, 8];

var myOtherOtherArray = [
							"DOG", 
							10, 
							true, 
							2.5, 
							[
								"second list", 
								"more values", 
								22
							], 
							myArray
						];

var myContainer = document.getElementById("container");

var counter = 0;
	while(counter < myArray.length || counter < myOtherArray.length){
	
		var myListItem = document.createElement("li");
		console.log(myArray[counter], myOtherArray[counter])
		
		if(myArray[counter] == undefined){
			myListItem.innerHTML = myOtherArray[counter];
		
		}else if(myOtherArray[counter] == undefined){
			myListItem.innerHTML = myArray[counter];

		}else{
			myListItem.innerHTML = myArray[counter] + myOtherArray[counter];
		}

		myContainer.appendChild(myListItem);
		counter++; 
	}



	for (var i = 0; i < myArray.length; i++) {
		var myListItem = document.createElement("li");
		myListItem.innerHTML = myArray[i];
	}


















