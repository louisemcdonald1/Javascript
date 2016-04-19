//Declare variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click',addUp,false);

function addUp(){
    //check event listener is working
    //alert("event listener is working");
    //Get the value from the text box and save it to local variable
    var userinput1 = document.getElementById("input1").value;
   
    
    var num1 = parseInt(userinput1);
        
    
    
    var negativeMessage = " is negative";
    var greaterThanMessage = " is greater than 10";
    var lessThanMessage = " is less than 10";
    
    if (num1 < 0)
        {
            document.getElementById("result").innerHTML =  num1 + negativeMessage;
        }
    else if (num1 < 10)
        {
            document.getElementById("result").innerHTML =  num1 + lessThanMessage;
        }
    
    else {
            document.getElementById("result").innerHTML =  num1 + greaterThanMessage;
        }
}
