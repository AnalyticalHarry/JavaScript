// while loop

// example 1
// counting from 1 to 5
let i = 1;
while (i<=5){
    console.log("Count", i);
    i++;
}

// ------------------------------------------------------------------------------ // 
// example 2
// number guessing using while loop
let secretNumber = 7;                       // secret number to guess
let guesses = [3, 8, 4, 7];                 // simulated guesses
let index = 0;                              // to iterate through the guesses array

while (index < guesses.length) {
    let guess = guesses[index];
    console.log(`Guess: ${guess}`);

    if (guess === secretNumber) {
        console.log("Congratulations! You guessed the secret number.");
        // exit the loop
        break; 
    } else {
        console.log("Wrong guess. Try again!");
    }
    // move to the next guess
    index++; 
}

// ------------------------------------------------------------------------------ // 
// example 3
// finding the First Negative Number in an Array
// an array of numbers, and we want to find the first negative number in the array.
let numbers = [3, 45, 29, 12, 0, -4, 56, -11, 2];
let index_num = 0;
let firstNegative = null;

while(index_num < numbers.length && firstNegative === null){
    if(numbers[index_num]<0){
        firstNegative = numbers[index_num];
    } 
    index_num ++;
}

if (firstNegative !== null) {
    console.log(`The first negative number in the array is: ${firstNegative}`);
} else {
    console.log("There are no negative numbers in the array.");
}

// ------------------------------------------------------------------------------ // 
// Example 4
// processing Until a Condition Fails
// product of numbers as long as the product is less than a certain threshold.
let num_values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let product = 1;
let iterator = 0;
const threshold = 100;

// below threshold
while (iterator < num_values.length && product < threshold) {
    //next product
    let nextProduct = product * num_values[iterator]; 
    if (nextProduct < threshold) {
        // update product only if it's below the threshold
        product = nextProduct; 
        console.log(`Product is ${product} after multiplying with ${num_values[iterator]}`);
    } else {
        // optionally handle the case when product would exceed the threshold more explicitly here if needed
        // exit the loop if the next product would exceed the threshold
        break; 
    }
    iterator++;
}

console.log(`Final product is ${product}, stopped multiplying as it reached or exceeded the threshold.`);

// above threshold
while (iterator < num_values.length && product < threshold){
    product *= num_values[iterator];
    if (product < threshold){
        console.log(`Product is ${product} after multiplying with ${num_values[iterator]}`);
    }
    iterator ++;
}
console.log(`Final product is ${product}, stopped multiplying as it reached or exceeded the threshold.`);

// ------------------------------------------------------------------------------ // 
// example 5 
// This pattern can be particularly useful when dealing with loops
// where the termination condition is based on the result of multiple complex checks or external conditions.
let isRunning = true;
let steps = 0;
var num_step = 5;
while (isRunning) {
    console.log(`Step ${++steps}.`);
    // simulating some conditions for stopping the loop
    if (steps == num_step) {
        // set flag to false to stop the loop
        isRunning = false; 
    }
}

console.log(`Loop ended after ${num_step} steps.`);
