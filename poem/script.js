var mySecondButton = document.getElementById("mySecondButton");
var addingAListElement = function(){

	console.log(myList.innerHTML.length)

	if(myList.innerHTML.length > 1000){
		myList.innerHTML = "";
	}else{
		var myNewElement = document.createElement("li");
		myNewElement.innerHTML = "Heights";
		myList.appendChild(myNewElement)
	}

}



mySecondButton.onclick = function(){addingAListElement()}







	












