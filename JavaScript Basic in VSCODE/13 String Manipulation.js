// string Manipulation

// string concatenation
let firstName = "Hemant";
let lastName = "Thapa";

let fullName = firstName + " " + lastName;
console.log(fullName)

// concatenating Strings, concat()
console.log(firstName.concat(" ",lastName));

// template literal 
console.log(`${firstName} ${lastName}`); 

// multiline string
let address = `Glasgow, Scotland,
United Kingdon`;

console.log(address);

// expression interpolation
let price = 19.99;
let taxRate = 0.07;
let total = `Total: $${(price * (1 + taxRate)).toFixed(2)}`;

console.log(total);

// nested template literals
let user = { name: "Julie", role: "admin" };
let user_greeting = `Hello ${user.name}, ${
    user.role === "admin" ? `welcome to the admin panel` : `welcome`
  }`;
console.log(user_greeting);

// template literal for complex datastructures
let fruitsList = ["apple", "banana", "cherry"];
let myFavoriteFruits = `My favorite fruits are: ${fruitsList.join(", ")}.`;

console.log(myFavoriteFruits);

// styling console output
console.log(`%cThis message is styled!`, `color: blue; font-size: 20px;`);

// extracting a substring from the beginning
// H  e  l  l  o  ,     w  o  r  l  d  !
// 0  1  2  3  4  5  6  7  8  9  10 11 12

let text = "Hello, world!";
let result_one = text.slice(0, 5);
console.log(result_one); 

// extracting a substring till the end
// the argument passed to slice() is 7. 
// this number represents the starting index from where the slice should begin. 
let result_two = text.slice(7);
console.log(result_two); 

// using negative indexes
let result_three = text.slice(-6, -1);
console.log(result); 

// if beginIndex is greater than endIndex, slice() returns an empty string
let result_four = text.slice(5, 2);
console.log(result_four);

// replace substrings
let newText = text.replace("World", "JS");
console.log(newText)

// converting into upper and lower case
let greeting = "Hello";
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

// trimming Whitespace, trim()
let paddedText = "   Hello my name is harry    ";
console.log(paddedText.trim());

// splitting strings, split()
let fruits = "apple, orange, banana, mango";
let fruiteArray = fruits.split(", ");
console.log(fruiteArray);

// extracting substring, substring()
// substring() doesn't accept negative indices.
let string = "Extracting Substrings";
console.log(string.substring(11, 21));

// searching for a Substring
let myString = "JavaScript!";
// indexOf() returns the index of the first occurrence of a specified value in a string.
console.log(myString.indexOf("Scri")); 
// lastIndexOf() returns the index of the last occurrence.
console.log(myString.includes("Script")); 
// includes() checks if a string contains a specified value, returning true or false.
console.log(myString.startsWith("Java")); 
// startsWith() and endsWith() check if a string starts or ends with a specified string, respectively.
console.log(myString.endsWith("!")); 
