// 1. Logical AND (&&):
let x = 5;
let y = 10;
let z = 15;
// both x and y are greater than 0
if (x > 0 && y > 0) {
    console.log("Both x and y are greater than 0");
} else {
    console.log("At least one of x or y is not greater than 0");
}

// all three variables are greater than 10
if (x > 10 && y > 10 && z > 10) {
    console.log("All variables are greater than 10");
} else {
    console.log("At least one of the variables is not greater than 10");
}

// ------------------------------------------------------------------------------ // 
// 2. Logical OR (||):
let isRaining = true;
let isSunny = false;
// either raining or sunny
if (isRaining || isSunny) {
    console.log("Weather is either rainy or sunny");
} else {
    console.log("Weather is neither rainy nor sunny");
}

let hasCoffee = true;
let hasTea = false;
// the person has either coffee or tea
if (hasCoffee || hasTea) {
    console.log("The person has either coffee or tea");
} else {
    console.log("The person has neither coffee nor tea");
}

// ------------------------------------------------------------------------------ // 
// 3. Logical NOT (!):

let isLoggedOut = false;
// user is logged out
if (!isLoggedOut) {
    console.log("The user is logged in");
} else {
    console.log("The user is logged out");
}

let hasPermission = false;
// user does not have permission
if (!hasPermission) {
    console.log("The user does not have permission");
} else {
    console.log("The user has permission");
}