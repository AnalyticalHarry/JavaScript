// Creating Array using loop
// Author Name: Hemant Thapa
// Date: 01.09.2024

// Method 1
// Initialize an empty array
const descendingNumbers = [];
// Loop from 20 to 0
for (let i = 20; i >= 0; i--) {
  // Add each number to the array
  descendingNumbers.push(i);
}
// Print the result on screen
console.log(descendingNumbers);

// Method 2
// Create an array of length 20 and map each index to 20 - index
const descendingNumberList = Array.from(
  { length: 21 },
  (value, key) => 20 - key
);
console.log(descendingNumberList);

// Method 3
// Create an array of length 20 and fill it with undefined values
const descendingAscendingNumbers = Array(21)
  // Fill with undefined values
  .fill()
  // Map each index to 20 - index
  .map((_, i) => 20 - i);
console.log(descendingAscendingNumbers);

// Method 4
// Create an array of length 20 and use reduce to build the array in descending order
const descendingNumberListTemp = Array(21)
  .fill()
  .reduce((acc, _, i) => [20 - i, ...acc], []);
console.log(descendingNumberListTemp);

// Method 5
// Get indices [0, ..., 20] and map each index to 20 - index
const descendingNumberListTemp2 = Array.from(Array(21).keys()).map(
  (i) => 20 - i
);
console.log(descendingNumberListTemp2);
