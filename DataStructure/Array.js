// Author : Hemant Thapa
// Date : 07.09.2024
// Topcs : Array
/*
1. What is Array?

- An arrya is a data structure used to store a collection of elements, typically of the same data types but array can hold mixed data types.
- Arrays are index collections, where each elements a specific position, start with index 0. 
- Array allow each access, modification, and Manipulation of the stored elements.

2. What are usage of Array?

- They are used to store multiple values in a single variables.
- They can acess by their index, for example arr[0] returns the first elements in array.
- It can perform various operation like, adding, removing and modifying elements.

*/

/*
Topics: 
1. Array of Numbers
2. Array of String
3. Array of Mixture
4. Data Type Logging
5. Accessing the elements
6. Modifying the elemnts
7. Adding an element to the end
8. Removing the last element
9. Shift and unshift
10. Finding Length of elements
11. adding and removing elements
12. Iteration over Arrays
13. using map to create new Arrays
14. Filter and reducing Arrays
15. Join and Split Array
16. Finding Elements
17. Sorting
18. Reverse
*/

// 1. Array of numbers
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

// 2. Array of string
let stringArr = ["Hello", "World"];
console.log(stringArr);

// 3. Array of Mixture
let mixtureArr = [
  "This",
  "is",
  "Mixture",
  "of",
  "Array",
  1,
  2,
  3.5,
  7.9,
  null,
  NaN,
  true,
  undefined
];
console.log(mixtureArr);

// 4. Data Type Logging
for (let i = 0; i < mixtureArr.length; i++) {
  console.log(
    `Element at index ${i} : ${mixtureArr[i]}: Type = ${typeof mixtureArr[i]}`
  );
}

// 5. Accessing the elements
console.log(mixtureArr[0]);
console.log(mixtureArr[1]);
console.log(mixtureArr[2]);
console.log(mixtureArr[3]);
console.log(mixtureArr[4]);

// 6. Modifying the elemnts
mixtureArr[0] = "These";
mixtureArr[1] = "Are";
console.log(mixtureArr);

// 7. Adding an element to the end
mixtureArr.push(20);
console.log(mixtureArr);

// 8. Removing the last element
mixtureArr.pop();
console.log(mixtureArr);

// 9. Shift and unshift
let fruits = ["Apple", "Banana", "Mango", "PineApple"];
let firstShift = fruits.shift();
console.log(firstShift);
console.log(fruits);

fruits.unshift("Apple", "Orange");
console.log(fruits);

// 10. finding length of elements
console.log(fruits.length);

// 11. adding and removing elements
let ArrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// this meaning, second index without making any change to rest of element (0)
ArrayList.splice(2, 0, "Alpha");
console.log(ArrayList);
// remove 2 elements starting from index 1
ArrayList.splice(1, 2);
console.log(ArrayList);
// remove two elements from index 2 and add 'a', and 'b'
ArrayList.splice(2, 2, "a", "b");
console.log(ArrayList);
// multiple slicing method using splice, it will remove from middle elements
let queue = ["first", "second", "third", "fourth", "fifth", "sixth"];
queue.splice(1, 1);
queue.splice(3, 1);
queue.splice(3, 1);
console.log(queue);

// 12. Iteration over Arrays
let animals = [
  "Tiger",
  "Lion",
  "Cow",
  "Human",
  "Bear",
  "Dog",
  "Cat",
  "Micky Mouse"
];

animals.forEach((value, index) => {
  console.log(`Animal ${value}: ${index}`);
});

// 13. using map to create new Arrays
let upperAnimals = animals.map((value) => value.toUpperCase());
console.log(upperAnimals);

let lowerAnimals = animals.map((value) => value.toLowerCase());
console.log(lowerAnimals);

// 14. Filter and reducing Arrays
const num = Array.from({ length: 21 }, (_, value) => value + 1);
console.log(num);

let evenNumber = num.filter((value) => value % 2 === 0);
let oddNumber = num.filter((value) => value % 2 !== 0);
console.log(evenNumber), console.log(oddNumber);

let sumNum = num.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(`Sum of total numbers are : ${sumNum}`);

// 15. Join and Split Array
let words = ["JavaScript", "is", "Awesome", "Language"];
let sentence = words.join(" ");
console.log(sentence);

let wordsArray = sentence.split("");
console.log(wordsArray);

// 16. Finding Elements
const Numbers = Array.from({ length: 50 }, (_, value) => value + 1);
console.log(Numbers);

let firstGreaterThan25 = Numbers.find((value) => value > 25);
console.log(firstGreaterThan25);

let index = Numbers.indexOf(40);
console.log(index);

// 17. Sorting
let reverseNumber = Numbers.sort((a, b) => a - b);
console.log(reverseNumber);

// 18. Reverse
Numbers.reverse();
console.log(Numbers);
