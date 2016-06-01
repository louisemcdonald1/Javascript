//Salary tax calculator - Javascript mini-project 1 18.5.16
var taxAllowance = 10600;
var basicTaxRate = 0.2;
var higherTaxRate = 0.4;



//Declare variable for listening to button1
var event1 = document.getElementById("buttonCalculate");
//Set up event listener on button1 click
event1.addEventListener('click', doCalculation, false);

function doCalculation() {  
    //get gross tax
    var grossTaxAmount = document.getElementById("tbGrossSalary").value;
    var enteredGrossTax = parseInt(grossTaxAmount);
    document.getElementById("debug").innerHTML = " tax amount entered is " + enteredGrossTax;
    
    //display random number to help with testing - remove when testing complete
    //document.getElementById("debug").innerHTML = "random number is" + randomNumber;
    
    //
    
    if (usersGuessedNumber === randomNumber)
        {
            document.getElementById("feedback1").innerHTML = successMessage;
            document.getElementById("feedback2").innerHTML = numberOfGuessesMessage + numberOfGuesses;
        }
    else if (usersGuessedNumber > randomNumber)
        {
            document.getElementById("feedback1").innerHTML = tooBigMessage;
            document.getElementById("feedback2").innerHTML = tryAgainMessage;
        }
    else if (usersGuessedNumber < randomNumber)
        {
            document.getElementById("feedback1").innerHTML = tooSmallMessage;
            document.getElementById("feedback2").innerHTML = tryAgainMessage; 
        }
}

