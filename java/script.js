//variables:

//strings
//    "this is a string"
//    'this is also a string'
//    "this is still 'a' string"
//    'this is also "still" a string'
//
//numbers
//    1
//    3.5
//    -3.5
//
//booleans
//    false
//    true
//
//arrays
//    ["string 1", "string 2", true]
//    [["apple", "pears", "oranges"],["celery", "broccoli"]]
//
//objects
//    {
//        "name" : "Cheryl",
//        "location" : "New School" ,
//        "weather" : "Cloudy" ,
//        "day" : 3,
//        "favoritefood" : ["bread", "apples"]
//    }
//
//function

//basic variables
var myString = "hello this is a string!"
var myNumber = 20;
var latterSpacingValue = 1;
var myBoolean = false;

//getting a div via its id:
var myDiv = document.getElementById("wrapper");
var colorDiv = document.getElementById("colorDiv")

//function
var myFunction = function(){
    myNumber = myNumber + 1;
    if (myBoolean == true) {
        myBoolean = false;   
        myNumber = myNumber + 10
       
    }else{
        myBoolean = true;
        
        myNumber = myNumber - 8;   
    }
    
    console.log(myNumber)
    myDiv.style.fontSize = myNumber + "px";
}

var anotherFunction = function(){
    if (myNumber <= 40) {
        //keep going
        myNumber = myNumber + 2;
    }else if(myNumber ==40){
        myNumber = myNumber +30;
    }else if(myNumber == 70){
        myNumber = myNumber-40;
    }else{
        //reset all small value
       myNumber = 20; 
    }
    myDiv.style.fontSize = myNumber + "px";
}

var classFunction = function(){
    console.log("hey this is our class function!")
    
    colorDiv.classList.toggle("text-color")
    myDiv.classList.toggle("text-color")
}

myDiv.onclick = anotherFunction;
colorDiv.onmouseover = classFunction;