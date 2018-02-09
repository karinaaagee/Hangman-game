window.onload = function(){
    //variables and functions
    var wins = 0;
    var losses = 0;
    var GuessesLeft = 9;
    var LettersGuessed= [];
    var allChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


    function displayScore() {
        console.log('wins ' + wins);
        console.log('losses ' + losses);
        console.log('GuessesLeft ' + GuessesLeft);
        console.log('LettersGuessed ' + LettersGuessed);
    }

    function displayInstructions(){
        console.log('Choose any letter from a-z to try and guess what letter I am thinking of');
    }
    function reset(){
        GuessesLeft = 9
        LettersGuessed = []
    }

    //steps of the game
    displayInstructions();
    

    document.onkeyup = function(event){
        displayScore();
        //variables and functions of the user
        var userChoice = event.key;
        var compChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
        
        LettersGuessed.push(userChoice);
        console.log(LettersGuessed)

        // displaying wins and losses
        if (userChoice == compChoice){
            wins++;
            alert("You Win!");
            GuessesLeft = 9;
            LettersGuessed.length = 0;
        }
        
        if (GuessesLeft == 0){
            losses++;
            alert("You lose...Try again");
            LettersGuessed.length = 0;
            reset()
    
        }
        else if (userChoice !== compChoice){
            GuessesLeft--;
        }
    
        document.getElementById("wins").innerHTML = "wins: " + wins
        document.getElementById("losses").innerHTML = "losses: " + losses
        document.getElementById("GuessesLeft").innerHTML = "Guesses Left: " + GuessesLeft
        document.getElementById("LettersGuessed").innerHTML = "Letters Guessed: " + LettersGuessed
    }
            
}














