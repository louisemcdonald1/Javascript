
//Declare variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click',myfirst,false);

function myfirst(){
    //check event listener is working
    //alert("event listener is working");
    //Get the value from the text box and save it to local variable
    var userinput1 = document.getElementById("input1").value;
    //Display the contents of the text box value on the screen
    document.getElementById("demo").innerHTML = userinput1;
}
