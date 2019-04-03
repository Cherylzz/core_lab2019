var myButton = document.getElementById("imageButton");
var myImageWrapper = document.getElementById("imageContainer");

var addImage = function(){
    var myImage = document.createElement("img");
    myImage.src = "../images/river.png";
    myImageContainer.appendChild(myImage);
}

myButton.onclick = addImage;

var myList = document.getElementById("wrapper");

var myFunction = function(){
var myNewElement = document.createElement("li")
myNewElement.className = "myaddedListElement";
myNewElement.innerHTML = "this is a new list element!";

myList.appendChild(myNewElement);

}
