// Loop in JavaScript 
// Loops are used to execute a piece of code again and again 
//  It allows you to repeat a block of code a certain number of times or iterate over the elements of an array 
// or another iterable object. The for loop is particularly useful when you know in advance how many times you want to execute a statement or a block of statements.

// for (initialization; condition; final-expression) {
    // code to be executed
// }

// print "Hello World!" 
console.log("Hello World!");

// ------------------------------------------------------------------------------ // 
// Example 1 : now i want to print it 5  times
for (let i = 0; i < 5; i++){
    console.log( i + 1, "Hello World!")
}

// ------------------------------------------------------------------------------ // 
// Example 2 : print all elements from array
let numList = [ 10, 200, 55, 23, 56];
for (let i = 0; i<numList.length; i++){
    console.log(numList[i]);
}

// ------------------------------------------------------------------------------ // 
// Example 3 : print user name using for loop
let users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 24 },
    { name: "Charlie", age: 29 }
  ];
  
for (let i =0; i < users.length; i++){
    console.log(users[i].name + " is " + users[i].age + " year old");
}


// ------------------------------------------------------------------------------ // 
// Example 4 : users, with nested objects for user details
const userData = {
    1: { name: "Alice", age: 30, roles: ["admin", "user"] },
    2: { name: "Bob", age: 24, roles: ["user"] },
    3: { name: "Charlie", age: 29, roles: ["user", "editor"] }
  };
// iterate over userData object
for (let i in userData){
    const user = userData[i];
    console.log(`User ID: ${i}, Name: ${user.name}, Age: ${user.age}`);
    // nested loop to access the role array
    console.log(`${user.name}'s Roles: `)
    for (let j = 0; j < user.roles.length; j++){
        console.log(`${user.roles[j]}`)
    }
}

// ------------------------------------------------------------------------------ // 
// Example 5 : E - Commerce 
const ecomCatalog = {
    electronics: [
      { id: 1, name: "Laptop", price: 800, stock: 10 },
      { id: 2, name: "Smartphone", price: 500, stock: 15 }
    ],
    clothing: [
      { id: 3, name: "T-Shirt", price: 20, stock: 100 },
      { id: 4, name: "Jeans", price: 50, stock: 50 }
    ],
    groceries: [
      { id: 5, name: "Bread", price: 2, stock: 50 },
      { id: 6, name: "Milk", price: 1.5, stock: 30 }
    ]
};

// iterate over the e-commerce catalog
for (let category in ecomCatalog) {
    console.log(`Category: ${category}`);

    let categoryTotalStockValue = 0;
    // iterate over the products in each category
    for (let product of ecomCatalog[category]) {
        console.log(`Product ID: ${product.id}, Name: ${product.name}, Price: $${product.price}, Stock: ${product.stock}`);
        // total stock value for each product
        let productTotalStockValue = product.price * product.stock;
        console.log(`Total Stock Value of ${product.name}: $${productTotalStockValue.toFixed(2)}`);
        categoryTotalStockValue += productTotalStockValue;
    }
    // total stock value for the category
    console.log(`Total Stock Value for ${category}: $${categoryTotalStockValue.toFixed(2)}`);
}