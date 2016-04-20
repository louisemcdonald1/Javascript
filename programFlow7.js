//Declare variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click', loopTheLoop, false);


function loopTheLoop() {
    
    var i = 0;
    var iPlusOne = 0;
    var output = "";
    
     
   do
    {
        iPlusOne = i + 1;
        output += iPlusOne + "<br>";
        i++;
    }
     while (i < 10)
    
    document.getElementById("result").innerHTML = output;
}

