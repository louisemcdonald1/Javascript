//Declare variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click',addUp,false);

function addUp(){
    //check event listener is working
    //alert("event listener is working");
    //Get the value from the text box and save it to local variable
    var userinput1 = document.getElementById("input1").value;
    var userinput2 = document.getElementById("input2").value;
    var num1 = parseInt(userinput1);
    var num2 = parseInt(userinput2);
    var greaterMessage = " is the greater of the two numbers";
    var equalMessage = "The two numbers are equal";
    
    if (num1 > num2)
        {
            document.getElementById("result").innerHTML = num1 + greaterMessage;
        }
    else if (num2 > num1)
        {
            document.getElementById("result").innerHTML = num2 + greaterMessage;
        }
    else
        {
            document.getElementById("result").innerHTML = equalMessage;
        }
}
