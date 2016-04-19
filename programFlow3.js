//Note that this code runs as soon as the page is loaded without waiting for the button click
//Declare variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click',display,false);

//declare a global variable
var var1 = 555;
document.getElementById("result").innerHTML = var1;

function display(){
    
    var var1 = 9999;
    
    document.getElementById("result2").innerHTML = var1;
}

