/*
Arrow Function:
Arrow functions, introduced in ECMAScript 2015 (ES6),
provide a concise syntax for writing function expressions in JavaScript. 
They allow for shorter syntax compared to traditional function expressions and lexically bind the this value (i.e., this retains the value of the enclosing lexical context's this).

Arrow functions are often used in scenarios where functions are used as arguments, such as in callbacks for timers, event handlers, and promises due to their concise syntax and lexical this binding:
 
Limitations

No binding of this: In arrow functions, this is lexically bound. It means that this inside an arrow function is the same as this outside the function. This is particularly useful in callbacks where the context might otherwise change.

No arguments object: Unlike regular functions, arrow functions do not have an arguments object. However, you can achieve similar functionality using rest parameters.

Cannot be used as constructors: Arrow functions cannot be used as constructors and will throw an error if used with new.

No duplicate named parameters: Arrow functions cannot have duplicate named parameters in strict mode.

No prototype: Arrow functions do not have a prototype property.

*/

// const functionName = (parameters) => {
    // function body
// }


// example sum of two numbers
const arrowSum = (a, b) =>{
    console.log(a + b);
};
arrowSum(3, 5);

// example multiplication of two numbers
const arrowMulti = (a, b) => {
    return `Multiplication of a & b is ${a * b}`
};
console.log(arrowMulti(10, 20));

// alternative method
const multiply = (a, b) => a * b;
console.log(multiply(10, 20));

// with no parameters, parentheses are required
const greet = () => console.log("Hello, world!");
greet()

// for a multi-statement body, curly braces are required
const checkEven = number => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(checkEven(4)); 
console.log(checkEven(7)); 

// arrow function in array map method
const numbers = [1, 2, 3, 4];
const squares = numbers.map(number => number * number);
console.log(squares); 

// Returning an Object Literal
const makePerson = (name, age) => ({ name: name, age: age });
console.log(makePerson("John", 30));

// filter even numbers
const numbersList = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbersList.filter(numbersList => numbersList % 2 === 0);
console.log(evenNumbers); 

// array reduction
// summing numbers in an array using reduce with an arrow function
const sum = [1, 2, 3, 4].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// arrow functions make handling promises more readable
const asyncOperation = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Operation Completed"), 1000);
  });
  // after 1 second: Operation Completed
  asyncOperation().then(result => console.log(result));

// destructuring objects directly in arrow function parameters for more readability
const person = { name: 'John', age: 28 };
const introduce = ({ name, age }) => `My name is ${name} and I am ${age} years old.`;
console.log(introduce(person)); 

// arrow functions with this in Methods
const user = {
    name: 'Hello',
    greet: () => console.log(`Hello, ${this.name}`) 
  };
  user.greet();