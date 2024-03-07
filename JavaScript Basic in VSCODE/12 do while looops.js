// do while loop 


// ------------------------------------------------------------------------------ // 
// example 1
// setting initial counter to 0
let index = 0;
// do while loop to print from 0 to 5
do {
    console.log(index);
    index ++;
} while (index <=5);


// ------------------------------------------------------------------------------ // 
// example 2
// using for loop for finding secret numbers
let secretNumber = 5; 
let guesses = [1, 2, 3, 4, 5, 6, 7];
let i = 0;
do {
    let guess = guesses[i];
    console.log(`Guess: ${guess}`)

    if (guess === secretNumber){
        console.log("Congratulations! you guessed the secret number.");
        break;
    }
    else{
        console.log("Wrong guess. Try again ");
    }
    i++;
}while (i < guesses.length);


// ------------------------------------------------------------------------------ // 
// example 3
// finding the First Negative Number in an Array
// an array of numbers, and we want to find the first negative number in the array.
let numberList = [1, 2, 3, 4, 5, 6, -7, -8, 9, 10];
// Initialise index counter
let index_num = 0; 
let firstNegative = null;

do {
    if (numberList[index_num] < 0) {
        firstNegative = numberList[index_num];
        // exit loop if a negative number is found
        break; 
    }
    // increment index_num to move to the next element
    index_num++; 
} while(index_num < numberList.length && firstNegative === null);

if (firstNegative !== null) {
    console.log(`The first negative number in the array is: ${firstNegative}`);
} else {
    console.log("There are no negative numbers in the array.");
}

// ------------------------------------------------------------------------------ // 
// example 4
// generates a number between 1 and 10
let randomNumber;
do {
    randomNumber = Math.floor(Math.random() * 10) + 1; 
    console.log(`Generated number: ${randomNumber}`);
} while (randomNumber !== 5);

console.log("Generated a 5!");

// ------------------------------------------------------------------------------ // 
// example 5
// tossing coins for head or tails

(function playGame() {
    let userGuess;
    let continuePlaying = true;

    do {
        // user's guess
        userGuess = prompt("Guess the coin toss! (heads/tails): ");

        // coin toss
        let coinToss = Math.random() < 0.5 ? "heads" : "tails";
        console.log(`The coin landed on: ${coinToss}`);

        // user guessed correctly
        if(userGuess.toLowerCase() === coinToss) {
            alert("You guessed right!");
        } else {
            alert("Wrong guess. Better luck next time!");
        }

        // user wants to play again
        continuePlaying = confirm("Do you want to toss the coin again?");
    } while (continuePlaying);

    console.log("Game over or Exiting the application.");
})();
