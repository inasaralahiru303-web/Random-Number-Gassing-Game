let randomNumber = Math.floor(Math.random() * 10) + 1;

function guessNumberOnAction(){

    let txtGuessNumber = document.getElementById("txtGuessNumber");
    let lblResult = document.getElementById("lblResult");

    let guessNumber = Number(txtGuessNumber.value);

    if(guessNumber < 1 || guessNumber > 10){
      lblResult.innerHTML = "Please enter a number between 1 and 10";
    }else if(guessNumber == randomNumber){
      lblResult.innerHTML = "Correct! You guessed the number.";

    }else{

        lblResult.innerHTML = "Wrong! Try again.";

    }
}