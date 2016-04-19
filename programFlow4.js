//Note that this code runs as soon as the page is loaded without waiting for the button click
//Declare variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click', displayLoop, false);


function displayLoop() {
    
    var outputString = "";
        
    for (i = 1; i <= 50; i++)
        {
           outputString += i + "<br>";
           document.getElementById("result").innerHTML = outputString; 
        }
    
    
}

