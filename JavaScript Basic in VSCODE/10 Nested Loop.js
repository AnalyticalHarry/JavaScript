// A common use case for nested loops is generating a multiplication table. 
// The outer loop iterates through each number you want to multiply, and the inner loop iterates through the multipliers.

// Example 1
// multiplication table for numbers 1 through 20
for (let i = 1; i <= 5; i++) {                               // outer loop for each number
    for (let j = 1; j <= 10; j++) {                          // inner loop for each multiplier
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('------------');                             // separates each multiplication table
}

// Example 2
// nested loops can also be useful for searching for pairs within an array that meet certain criteria, such as summing to a specific value.
// finding Pairs in an Array
// find all pairs of numbers in an array that sum to 10
let numbers = [1, 4, 5, 3, 6, 8, 2, 7];
for (let i = 0; i < numbers.length; i++) {                  // outer loop
    for (let j = i + 1; j < numbers.length; j++) {          // inner loop
        if (numbers[i] + numbers[j] === 10) {
            console.log(`Pair found: ${numbers[i]} + ${numbers[j]} = 10`);
        }
    }
}

// Example 3
// elements in a 2D Array
// Nested loops are particularly useful when working with two-dimensional arrays (arrays of arrays), 
// like when you're dealing with matrices or grids.

// (3x3 matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// access and print each element in the 2D array
for (let i = 0; i < matrix.length; i++) {                           // Outer loop iterates through each row
    for (let j = 0; j < matrix[i].length; j++) {                    // Inner loop iterates through each column in the current row
        console.log(`Element at [${i}][${j}]: ${matrix[i][j]}`);
    }
}

// Example 4
// grouping products by category
// let say we have an e-commerce platform where you have a list of products, 
// each with a category, and we want to group these products by their categories. 

const productsList = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Jeans", category: "Apparel" },
    { id: 3, name: "Blender", category: "Home Appliances" },
    { id: 4, name: "T-shirt", category: "Apparel" },
    { id: 5, name: "Fridge", category: "Home Appliances" },
    { id: 6, name: "Headphones", category: "Electronics" },
];

// object to hold the grouped products
const groupedProducts = {};

// outer loop to iterate over each product 
// Changed products to productsList
for (const i of productsList){ 
    if (!groupedProducts[i.category]){
        groupedProducts[i.category] = [];
    }
    groupedProducts[i.category].push(i); 
}

for (const j in groupedProducts){
    console.log(`Category: ${j}`);
    for(const k in groupedProducts[j]){
        // Correctly accessing the product's name using the index k
        // Corrected to access name property correctly
        console.log(` - ${groupedProducts[j][k].name}`); 
    }
}

// Example 5
// Transposing a Matrix
// Transposing a matrix means flipping it over its diagonal, turning the matrix's rows into columns and vice versa. 
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];

    for (let col = 0; col < cols; col++) {
        const newRow = [];
        for (let row = 0; row < rows; row++) {
            newRow.push(matrix[row][col]);
        }
        transposed.push(newRow);
    }

    return transposed;
}

// matrix
const originalMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original Matrix:");
console.log(originalMatrix);

const transposedMatrix = transposeMatrix(originalMatrix);

console.log("Transposed Matrix:");
console.log(transposedMatrix);
