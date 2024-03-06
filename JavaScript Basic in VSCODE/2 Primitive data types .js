// using variable, Variables declared with var are function-scoped or globally scoped, 
// depending on whether they are declared inside or outside of a function, respectively.
// Variables declared with var can be re-declared and reassigned.

// 1. Choose Descriptive Names
// Use meaningful and descriptive names for your variables to enhance code readability and maintainability.

// 2. Start with a Letter
// Variable names must begin with a letter. They cannot start with a number.

// 3. Subsequent Characters
// After the first character, variable names can include letters, digits, and underscores.

// 4. Case Sensitivity
// JavaScript is case-sensitive, so firstName and FirstName are considered different variables.

// 5. Avoid Reserved Keywords
// Avoid using JavaScript reserved keywords as variable names. For example, let, const, function, if, else, etc.

// 6. Use Camel Case
// For multi-word variable names, use camel case convention where the first letter of each word after the first is capitalized.
// For example: myVariableName, firstName, totalAmount.

// 7. Constants
// Use const for variables that won't be reassigned, and let for variables that may be reassigned.

// 8. Declare Before Use
// Although JavaScript allows declaring variables anywhere within a scope, it's a good practice to declare them at the beginning of the scope (e.g., at the beginning of a function or before they are used) to enhance code readability and avoid potential issues with variable hoisting.

// 9. Avoid Global Variables
// Minimize the use of global variables to prevent polluting the global namespace and potential conflicts with other scripts.

// 10. Initialise Variables
// Initialise variables at the time of declaration whenever possible to avoid unexpected behavior due to variables being undefined.

// let, const and var
// 1. Var : variable can be re-declared and update, a global scope variable.
// 2. let : variable cannot be re-declared but can be updated. A block scope varaible.
// 3. const : variable cannot be re-declared or updated. A block scope variable.

// using var for showing, it is global scope
var globalScope = "I am a global scope";
{
    var globalScopeTwo = "I am a second example of global scope";
}
console.log(globalScope);
console.log(globalScopeTwo);

// using let for showing a block scope
let blockScope = "I am a block variable";
{
    let blockScopeTwo = "I am a second example of block scope variable";
    console.log(blockScopeTwo) 
    // we need to declare consle.log() function inside the block for print
}
console.log(blockScope)
// console.log(blockScopeTwo) 
//Uncaught ReferenceError: blockScopeTwo is not defined

// using const for showing, it is block scope
const blockScopeThree = "I am a block variable";
{
    let blockScopeFour = "I am a second example of block scope variable";
    console.log(blockScopeFour) 
    // we need to declare consle.log() function inside the block for print
}
console.log(blockScopeThree)
// console.log(blockScopeFour) 
// Uncaught ReferenceError: blockScopeTwo is not defined

// what is gloval scope varaible ?
// Variables declared outside of any function or block have global scope.
// Global variables can be accessed from anywhere in the JavaScript code, including inside functions and blocks.
// They remain accessible throughout the entire lifetime of the program.
// It's generally advisable to minimise the use of global variables to prevent namespace pollution and potential conflicts with other scripts.

// Block-Scope Variables ?
// Variables declared inside a block (enclosed within curly braces {}) have block scope.
// Block-scoped variables are only accessible within the block in which they are declared.
// They are not visible outside of the block, including to parent blocks.
// Block-scoped variables are typically declared using let or const.

var x = 10; //declaring variable and storing 10
var x = 20; // reassigned variable and storing 20
x = 30; // also valid method to declare varaible and assigning 30 
console.log(x) // printing value of X using conslo.log() function


// Variables declared with let cannot be re-declared within the same block scope, but they can be reassigned.
let y = 10;
// let y = 20; 
// this will throw an error, so we have commented above line 
y = 40;
// let y = 20; and initialising it with the value 10. Later, we attempting to reassign the value of y to 40, which is perfectly valid since y was declared using let.
// If you were to uncomment those line let = 20, it would indeed throw an error because you're attempting to redeclare y in the same scope, which is not allowed with let.
console.log(y)

// creating variables using string data types
let firstName = "Hemant";
let lastName = "Thapa";
// printing full name on the screen
console.log(firstName, " ", lastName);

// creating numerical or integer data types 
let age = 24;
// printing age on the screen
console.log(age, "years old");

// creating float data types
let height = 1.67; // height in meters
let weight = 80.0; // weight in kg
console.log(`Height & weight of ${firstName} ${lastName} is ${height} meters & ${weight} kg`)

// null & undefined data types
let phoneNumber = undefined;
let contactNumber = null;
console.log(phoneNumber); // Outputs: undefined
console.log(contactNumber); // Outputs: null

// boolean data types
let isStudent = true;
let isVegan = false;
// printing on screen 
console.log(isStudent, isVegan)

// creating function to print all information 
function printPersonInfo(firstName, lastName, age, height, weight, phoneNumber, contactNumber, isStudent, isVegan) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age} years old`);
    console.log(`Height: ${height} meters`);
    console.log(`Weight: ${weight} kg`);
    console.log(`Phone Number: ${phoneNumber}`);
    console.log(`Contact Number: ${contactNumber}`);
    console.log(`Is Student: ${isStudent}`);
    console.log(`Is Vegan: ${isVegan}`);
}
// calling function to print all above information 
printPersonInfo(firstName, lastName, age, height, weight, phoneNumber, contactNumber, isStudent, isVegan);

// simple example of javascript for solving numerical problems
const pi = 3.14; // deaclaring pi value as constant
let radius = 5; // radius is 5 cm
let area = pi * (radius * radius);
// using to.Fixed(2) function to round value up to 4
console.log("The area of the circle with radius", radius, "is", area.toFixed(4));
