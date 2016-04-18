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
    var userinput3 = document.getElementById("input3").value;
    
    var num1 = parseInt(userinput1);
    var num2 = parseInt(userinput2);
    var num3 = parseInt(userinput3);
    
    var multiplicationResult = (num1 + num2) * num3;
    var additionResult = num1 + num2 + num3;
    
    var differenceResult = multiplicationResult - additionResult;
    
    var differenceMessage = "The difference between (a + b) * c and (a + b + c) is: " + differenceResult;
    
    document.getElementById("result").innerHTML =  differenceMessage;
}
