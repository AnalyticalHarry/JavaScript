// array is a collection of items
// storing information linearly 
let heros = ["Superman", "Batman", "Ironman", "HomeLander"];
// position indexing or indices 
console.log(heros[0], heros[1], heros[2], heros[3]);
// property of array
console.log(heros.length);
// for loop to print item of an array
for(let i = 0; i<heros.length; i++){
    console.log(heros[i]);
}

// for of
for(let hero of heros){
    console.log(hero);
}

// type of marks
// array is an object 
// we treat key as index
let marks = [100, 80, 67, 54, 95];
console.log(typeof(marks));
// for loop to print each items of array
for (let i = 0; i < marks.length; i++){
    console.log(`Index: ${i}, Value: ${marks[i]}`);
}

// sum and average of all marks using for loop
let sum = 0;
for(let i of marks){
    sum += i;
}
console.log(`Total sum makrs of class: ${sum}`)
// average of marks
let average = sum/marks.length;
console.log(`Average makrs of class: ${average}`)


// given array with price of 5 items [250, 645, 300, 900, 50]
// all items has offer of 10 percent off
let productPrice = [250, 645, 300, 900, 50];
let newPrice = [];
for(let i of productPrice){
    newPrice.push(i * (1 - 0.10))
}
console.log(newPrice);
// alernative method
for (let i = 0; i < productPrice.length; i++){
    let offer = productPrice[i]/10;
    productPrice[i] -= offer;
}
console.log(productPrice);

// -------------------------------- array methods ------------------------------------- //
// array methods
// push() : add to end
// toString : convert array to string
let info = [ "Lucy", 24, "Glasgow"];
info.push("Student", "GCU");
console.log(info);

// pop() : delete from end and return
let deletedItem = info.pop(); // removed GCU from array
console.log("Item Deleted from array:", deletedItem);
console.log(info);


// convert all array into string
console.log(info.toString()); // do not return original array
console.log(info);

console.log(marks.toString()); //single string

// concat multiple array
let num_one = [1, 2, 3, 4];
let num_two = [5, 6, 7, 8];
let num_three = num_one + "," + num_two;
console.log(num_three);

let num_four = num_one.concat(",", num_two);
console.log(num_four);

// shift : removing the first element from an array
let array = [1, 2, 3, 4, 5];
let firstElement = array.shift();
console.log(firstElement); 
console.log(array);

// adding elements to the beginning of an array
array = [2, 3, 4, 5];
let newLength = array.unshift(1);
console.log(newLength); 
console.log(array); 

// slice method : create a new array from a portion of an existing array without modifying the original array.
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3);
console.log(fruits);
console.log(citrus); 

// splice method :  add, remove, or replace elements in an array, modifying the original array in the process.
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
// at position 2, remove 1 element and add "Lemon", "Kiwi"
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);

// practice question create an array of 5 companies
// remove first company from the array
// remove one company and add another
// add amazon at  end
let companyList = ["Nvidia", "Apple", "Microsoft", "Google", "IBM"];
console.log(companyList); // creating a array of five companies
companyList.shift(); // remove first item
console.log(companyList);
companyList.splice(1, 1, "Meta") // replacing Microsoft with Meta
console.log(companyList);
companyList.push("Amazon"); // adding amazon at end of an array
console.log(companyList);