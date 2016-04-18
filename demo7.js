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
    var oneMore = num1 + 1;
    var oneLess = num1 - 1;
    
    var oneMoreMessage = " is one more than ";
    var oneLessMessage = " is one less than ";
    
    var outputMessage = oneMore + oneMoreMessage + num1 + " and " + oneLess + oneLessMessage + num1 + "."
    
    document.getElementById("result").innerHTML =  outputMessage;
       
    
}
