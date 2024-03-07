// Functions

/*
A function in programming is a reusable block of code designed to perform a specific task. 
Functions are fundamental to all programming languages, including JavaScript, and 
they help in organizing code, making it more readable, maintainable, and testable. 
By encapsulating code tasks into functions, you can easily reuse code, simplify complex problems, 
and manage code scope more effectively.

Characteristics of Functions
- Modularity: Functions allow you to break down your code into smaller, modular pieces. 
              Each function can be developed, tested, and debugged independently of others, promoting modular design.

- Reusability: Once defined, functions can be called multiple times from different parts of your program or even in other programs. 
               This eliminates the need to rewrite the same code.

- Parameters and Return Values: Functions can take inputs, known as parameters or arguments, process them, and return an output.
                                This makes functions flexible and adaptable to various use cases.

- Scoping: Variables defined inside a function are not accessible from outside, promoting encapsulation and avoiding name conflicts. 
           This local scope ensures that the function's behavior is self-contained.
*/

// Basic Function to Add Two Numbers
// input a, b is parameters
function add(a, b){
    return a + b;
}
// calling function, it is known as arguments
console.log(add(10, -2));

// function to Greet a User
function greeting(name){
    return `Hello ${name}`;
}

console.log(greeting("Harry"));

// arrow function to square a number
const square = x => x * x;
console.log(square(4));

// function to check if a number is even
// function checks if a given number is even and returns a boolean value.
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4)); 
console.log(isEven(5));

// higher-order function that returns a function
function multiplier(factor) {
    return x => x * factor;
}
const doubler = multiplier(2);
const tripler = multiplier(3);
console.log(doubler(5)); 
console.log(tripler(5)); 

// function using  loop to iterate over each number in the numbers array and adds it to the sum variable
function sumAll(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4));

// alternative 
function sumAll(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(sumAll(1, 2, 3, 4)); 

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log('This function runs right away!');
})();

// Creating Private Variables
// Closures allow functions to access variables from an outer function after the outer function has returned. 
function createCounter(){
    let count = 0;
    return {
        increment: () => count += 1,
        decrement: () => count -= 1,
        getCount: () => count
    };
}

const counter = createCounter();
console.log(counter.getCount()); // return 0
counter.increment(); // increase 1
counter.increment(); // increase 2
console.log(counter.getCount()); // return 2
counter.decrement(); // decrease 1
console.log(counter.getCount()); // 1

// Recursion : Factorials
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

// Higher-Order Function : Custom Array Filter
// Higher-order functions either take functions as parameters, return a function, or both. 
function customFilter(array, callback) {
    const filteredResults = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filteredResults.push(array[i]);
        }
    }
    return filteredResults;
}
const numbers = [1, 2, 3, 4, 5];
const oddNumbers = customFilter(numbers, number => number % 2 !== 0);
console.log(oddNumbers);

// Asynchronous Function :  Fetching Data with Promises (Node.js)
// Asynchronous functions allow JavaScript to perform background tasks, such as data fetching, without blocking the main thread.
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // simulating async data fetch
            // simulated response
            const data = { id: 1, title: "Sample Data" }; 
            resolve(data);
        }, 1000);
    });
}
fetchData('https://github.com/AnalyticalHarry/JavaScriptNotes')
    .then(data => console.log(data))
    .catch(error => console.error(error));

// promises with Async/Await (Node.js)
// Async/await syntax provides a cleaner, more readable way to handle asynchronous operations compared to traditional promise syntax.
async function fetchDataAsync(url) {
    try {
        // assume fetch is available
        const response = await fetch(url); 
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchDataAsync('https://github.com/AnalyticalHarry/JavaScriptNotes');
