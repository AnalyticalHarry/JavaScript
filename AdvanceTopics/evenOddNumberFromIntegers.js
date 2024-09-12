/**
 * Generate a list of integers from -10 to 10,
 * then filter into positive/negative even/odd numbers.
 */

// an array of integers from -10 to 10
let integers = Array.from({ length: 21 }, (_, value) => value - 10);

// filter for positive even numbers
let positiveEven = integers.filter(num => num > 0 && num % 2 === 0);

// filter for positive odd numbers
let positiveOdd = integers.filter(num => num > 0 && num % 2 !== 0);

// filter for negative even numbers
let negativeEven = integers.filter(num => num < 0 && num % 2 === 0);

// filter for negative odd numbers
let negativeOdd = integers.filter(num => num < 0 && num % 2 !== 0);

console.log("Positive Even Numbers:", positiveEven); 
console.log("Positive Odd Numbers:", positiveOdd);   
console.log("Negative Even Numbers:", negativeEven);
console.log("Negative Odd Numbers:", negativeOdd);   
