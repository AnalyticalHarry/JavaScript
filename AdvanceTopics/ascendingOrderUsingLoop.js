// Creating Array using loop
// Author Name: Hemant Thapa
// Date: 01.09.2024

// Method 1
// empty array
const numbers = [];
// loop from 0 to 20
for (let i = 0; i < 21; i++) {
  // adding each number to the array
  numbers.push(i);
}
// printing result on screen
console.log(numbers);

// Method 2
// array of length 20, and map each index to index + 1
const numberList = Array.from({ length: 20 }, (value, key) => key + 1);
console.log(numberList);

// Method 3
// an array of length 20 and fill it with undefined values
const ascendingNumbers = Array(20)
  // fill with undefined values
  .fill()
  // Map each index to index + 1
  .map((_, i) => i + 1);
console.log(ascendingNumbers);

// Method 4
// reduce with array
const numberListTemp = Array(20)
  .fill()
  .reduce((acc, _, i) => [...acc, i + 1], []);
console.log(numberListTemp);

// method 5
// get indices [0,...20] and map each index to index + 1
const numberListTemp2 = Array.from(Array(20).keys()).map((i) => i + 1);
console.log(numberListTemp2);
