// conditional statements example 1
let firstName = "Hemant";
let lastName = "Thapa";
let age = 25;

if (typeof firstName === 'string' && typeof lastName === 'string') {
    console.log("Guest First and Last name is valid");

    if (age >= 18) {
        console.log("Guest is an adult");
    } else {
        console.log("Guest age is not an adult");
    }
} 
else if (typeof firstName !== 'string' || typeof lastName !== 'string') {
    console.log("Guest First and Last name is not valid, please re-enter user name");
    if (age >= 18) {
        console.log("Guest is an adult");
    } else {
        console.log("Guest age is not an adult");
    }
} 
else {
    console.log("Guest First and Last name is not valid, please re-enter user name");

    if (age >= 18) {
        console.log("Guest is an adult");
    } else {
        console.log("Guest age is not an adult");
    }
}

// ------------------------------------------------------------------------------ // 
// condition statement example 2
let password = 'MySecret123@'
const minLength = 8;
const requiredChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

if (password.length > minLength && password.match(requiredChar)){
    console.log('"Congratulations! Your password meets the minimum requirements and is considered strong."');
}
else if(password.length < minLength){
    console("Sorry, Length of password dosen't meet our requirement, please try again!!")
}
else if(!password.match(requiredChar)){
    console.log("Sorry, your password does not contain required special characters. Please include at least one special character (!@#$%^&*()_+-=[]{};:'\"\\|,.<>/?).")
}
else{
    console.log("Sorry, your password don't have enough length plus special characters")
}


// Ternary Operators 
// a ? b : c
// condition ? exprIfTrue : expIfFalse
// age > 18 ? "adult" : "not adult"; 
// above code says, if age is above 18 than adult will be return else not adult
let personAge = 25;
let reuslt = personAge >= 18 ? "Person is adult":"Person is not adult";  // return adult
console.log(reuslt)

personAge >= 18 ? console.log("Person is adult") : console.log("Person is not adult")