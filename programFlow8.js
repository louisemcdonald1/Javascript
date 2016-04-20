//Declare variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click', nestedLoop, false);


function nestedLoop() {
    
    var iPlusOne = 0;
    var jPlusOne = 0;
    
    var output = "";
    
    for(var i = 0; i < 10; i++)
        {
            for(var j = 0; j < 10; j++)
                {
                    jPlusOne = j + 1;
                    output += "Inner loop number is " + jPlusOne + "<br>";
                }
            iPlusOne = i + 1;
            output += "Outer loop number is " + iPlusOne + "<br>";
        }
    
    document.getElementById("result").innerHTML = output;
}

