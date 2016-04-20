//Guess the number game - Javascript mini-project 1 20.4.16
var randomNumber = 0;
var numberOfGuesses = 0;
var successMessage = "You guessed correctly!";
var tooBigMessage = "Your guess was too big.";
var tooSmallMessage = "Your guess was too small.";
var tryAgainMessage = "Have another go!";
var numberOfGuessesMessage = "Your number of guesses was: ";


//Generate random number
randomNumber = Math.floor((Math.random() * 100) + 1);

//Declare variable for listening to button1
var event1 = document.getElementById("buttonCalculate");
//Set up event listener on button1 click
event1.addEventListener('click', calculateInterest, false);

function calculateInterest() {  
    //get user input
    //loan amount
    var usersLoanInput = document.getElementById("tbLoan").value;
    var loan = parseInt(usersLoanInput);
    //document.getElementById("feedback1").innerHTML = "loan is " + loan;
    //rate
    var usersRateInput = document.getElementById("tbRate").value;
    var rate = parseInt(usersRateInput);
    //document.getElementById("feedback2").innerHTML = "rate is " + rate;
    //term
    var usersTermInput = document.getElementById("tbTerm").value;
    var term = parseInt(usersTermInput);
    //document.getElementById("debug").innerHTML = "term is " + term;
    
    //calculate interest
    var ratePerCent = rate/100;
    var totalInterest = loan * ratePerCent * term;
    var monthlyRepayment = totalInterest/(term * 12);
    
    //display result
    document.getElementById("feedback1").innerHTML = "Your monthly interest repayment will be:   £" + monthlyRepayment;
    document.getElementById("feedback2").innerHTML = "The total amount of interest you will pay is:  £" + totalInterest;
}

