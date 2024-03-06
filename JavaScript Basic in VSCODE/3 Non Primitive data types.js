// Non - primitive data types in JavaScript include objects, arrays, and functions

// Objects 
// If you expect the variable to be reassigned to a different object, use let.
// This allows flexibility in updating the variable reference as needed.
let person = {
    firstName:"Hemant",
    lastName:"Thapa",
    isStudent: true,
    contact: {
        email:"heamntthapa1998@gmail.com",
        phone:null
    }
};
// printing object
console.log(person)
console.log("Contact Email:", person.contact.email);

// If you know that a variable will not be reassigned to a different object, use const.
// This ensures that the variable reference remains constant, improving code readability and preventing accidental reassignments.
// This is especially useful for objects and arrays that are intended to remain unchanged throughout the program execution.
const userDetails = {
    firstName: "Harry",
    lastName: "Thapa",
    age: 25,
    email: "hemantthapa1998@gmail.com",
    address: {
        street: "8 Cecil Street",
        city: "Glasgow",
        zipCode: "G128RQ",
        country: "UK"
    },
    interests: ["programming", "reading", "hiking"]
};

userDetails['firstName'] = "Hemant"

console.log("User Details:");
console.log("Name:", userDetails.firstName, userDetails.lastName);
console.log("Age:", userDetails.age);
console.log("Email:", userDetails.email);
console.log("Address:", userDetails.address.street + ", " + userDetails.address.city + ", " + userDetails.address.zipCode + ", " + userDetails.address.country);
console.log("Interests:", userDetails.interests.join(", "));

// array object 
const cars = ["Audi", "BMW", "Tesla", "Volvo"]
console.log(cars)

// array of user objects
const usersArray = [
    {
        firstName: "Harry",
        lastName: "Thapa",
        age: 25,
        email: "hemantthapa1998@gmail.com",
        address: {
            street: "8 Cecil Street",
            city: "Glasgow",
            zipCode: "G128RQ",
            country: "UK"
        },
        interests: ["programming", "reading", "hiking"]
    },
];

usersArray[0].firstName = "Hemant";
// print out user details
console.log("User Details:");

// loop through the users array
usersArray.forEach((user, index) => {
    console.log("User", index + 1);
    console.log("Name:", user.firstName, user.lastName);
    console.log("Age:", user.age);
    console.log("Email:", user.email);
    console.log("Address:", user.address.street + ", " + user.address.city + ", " + user.address.zipCode + ", " + user.address.country);
    console.log("Interests:", user.interests.join(", "));
});

// converting Object to array object
const colors = ["Black", "Blue", "Green", "Orange", "White", "Yellow"];
// the map() method is called on the colors array. This method creates a new array by applying a function to each element of the original array.
// inside the map() method, an arrow function is used as the argument. This arrow function takes each element of the colors array as its parameter (denoted by color).
// the arrow function then returns an object literal ({ color }) with a property named color and the value being the parameter of the arrow function. This shorthand syntax { color } is equivalent to { color: color }.
// so, for each color in the colors array, the arrow function creates an object with a single property color, and this object is added to the colorsArray.
const colorsArray = colors.map(color => ({ color }));
console.log(colorsArray);

// Array of date strings
const datesStrings = ["2024-03-01", "2024-03-02", "2024-03-03", "2024-03-04", "2024-03-05"];
// date strings to Date objects and create an array of objects
const datesArray = datesStrings.map(dateString => ({ date: new Date(dateString) }));
// array of objects
console.log(datesArray);