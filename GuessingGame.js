const userInput = parseInt(prompt("Enter the max value"));

const randomNumber = Math.floor((Math.random()*userInput)) + 1;
console.log(randomNumber);

let guessInput = prompt("Guess the Number");

while(true)

{
    if(guessInput == 'quit')
    {
        console.log("You quit");
        break;
    }else if(randomNumber == parseInt(guessInput))
    {
        console.log("You guessed it right");
        break;
    } else if (randomNumber > parseInt(guessInput))
    {
        guessInput = prompt("Please enter Greater Number");
    }
    else
    {
        guessInput = prompt("Please enter smaller Number");
    }
}

