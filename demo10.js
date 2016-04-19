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
    
    var greaterThanMessage = " is greater than 10";
  
    var bothMessagePt2 = " are greater than 10"
    
    if ((num1 > 10) && (num2 > 10))
        {
            document.getElementById("result").innerHTML = "Both " + num1 +  " and " + num2 + bothMessagePt2;
        }
    else if (num1 > 10)
        {
            document.getElementById("result").innerHTML =  num1 + greaterThanMessage;
        }
    
    else if (num2 > 10) {
            document.getElementById("result").innerHTML =  num2 + greaterThanMessage;
        }
    else{
        document.getElementById("result").innerHTML =  "Both numbers are less than 10";
    }
}
