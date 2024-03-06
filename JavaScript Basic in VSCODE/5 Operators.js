// Operators are used for operation on data

// Arithmetic Operators: These operators perform mathematical operations on numeric operands.
// Addition (+): Adds two operands.
// Subtraction (-): Subtracts the right operand from the left operand.
// Multiplication (*): Multiplies two operands.
// Division (/): Divides the left operand by the right operand.
// Modulus (%): Returns the remainder when the left operand is divided by the right operand.
// Increment (++): Increases the value of the operand by 1.
// Decrement (--): Decreases the value of the operand by 1.

let addition = 5 + 3;               // addition = 8
let subtraction = 10 - 4;           // subtraction = 6
let multiplication = 6 * 2;         // multiplication = 12
let division = 20 / 5;              // division = 4
let modulus = 10 % 3;               // modulus = 1
let exponentiation = 10 ** 2        // exponent value
//printing all result on screen
console.log(addition, subtraction, multiplication, division,exponentiation, modulus)

// post increment, i ++ 
let increment = 5; increment++;     // increment = 6
let decrement = 10; decrement--;    // decrement = 9
console.log(increment)
console.log(decrement)
// post increment, -- i
let alpha = 50; ++alpha;
let beta = 100; --beta;
console.log(alpha)
console.log(beta)

let num = 200;
// Pre-increment (++num): Increments the value of num and then returns the incremented value
let preIncrementResult = ++num;
console.log("Pre-increment:", preIncrementResult); 
console.log("Updated x:", num); 

// Post-increment (num++): Returns the current value of num and then increments the value
let postIncrementResult = num++;
console.log("Post-increment:", postIncrementResult); 
console.log("Updated x:", num); 

// Pre-decrement (--num): Decrements the value of x and then returns the decremented value
let preDecrementResult = --num;
console.log("Pre-decrement:", preDecrementResult); 
console.log("Updated x:", num); 

// Post-decrement (num--): Returns the current value of num and then decrements the value
let postDecrementResult = num--;
console.log("Post-decrement:", postDecrementResult); 
console.log("Updated x:", num); 

// Assignment Operators: These operators assign values to variables.
// Assignment (=): Assigns the value of the right operand to the left operand.
// Addition assignment (+=): Adds the value of the right operand to the left operand and assigns the result to the left operand.
// Subtraction assignment (-=): Subtracts the value of the right operand from the left operand and assigns the result to the left operand.
// Multiplication assignment (*=): Multiplies the left operand by the right operand and assigns the result to the left operand.
// Division assignment (/=): Divides the left operand by the right operand and assigns the result to the left operand.
// Modulus assignment (%=): Assigns the remainder of the division of the left operand by the right operand to the left operand.

let x = 5;
console.log(x)

x += 5;             // x = x + 5, now vlaue of x is changed
console.log(x)

x -= 3;             // x = x - 3, now vlaue of x is changed
console.log(x)

x *= 2;             // x = x * 2, now vlaue of x is changed
console.log(x)

x /= 4;             // x = x / 4, now vlaue of x is changed
console.log(x)

x %= 3;             // x = x % 3, now vlaue of x is changed
console.log(x)

x **= 4;            // x = x ** 4, now vlaue of x is changed
console.log(x)


// Comparison Operators: These operators compare two values and return a boolean result (true or false).
// Equal to (==): Returns true if the operands are equal.
// Not equal to (!=): Returns true if the operands are not equal.
// Strict equal to (===): Returns true if the operands are equal and of the same type.
// Strict not equal to (!==): Returns true if the operands are not equal or not of the same type.
// Greater than (>): Returns true if the left operand is greater than the right operand.
// Less than (<): Returns true if the left operand is less than the right operand.
// Greater than or equal to (>=): Returns true if the left operand is greater than or equal to the right operand.
// Less than or equal to (<=): Returns true if the left operand is less than or equal to the right operand.

let isEqual = (5 == 5);                 
console.log("isEqual =", isEqual);                                   // isEqual = true

let isNotEqual = (5 != 10);             
console.log("isNotEqual =", isNotEqual);                             // isNotEqual = true

let isStrictEqual = (5 === "5");        
console.log("isStrictEqual =", isStrictEqual);                       // isStrictEqual = false

let isStrictNotEqual = (5 !== "5");     
console.log("isStrictNotEqual =", isStrictNotEqual);                 // isStrictNotEqual = true

let isGreaterThan = (10 > 5);           
console.log("isGreaterThan =", isGreaterThan);                       // isGreaterThan = true

let isLessThan = (3 < 8);               
console.log("isLessThan =", isLessThan);                             // isLessThan = true

let isGreaterThanOrEqual = (5 >= 5);    
console.log("isGreaterThanOrEqual =", isGreaterThanOrEqual);         // isGreaterThanOrEqual = true

let isLessThanOrEqual = (7 <= 6);       
console.log("isLessThanOrEqual =", isLessThanOrEqual);              // isLessThanOrEqual = false


// Logical Operators: These operators are used to combine conditional statements and return a boolean result.
// Logical AND (&&): Returns true if both operands are true.
// Logical OR (||): Returns true if at least one of the operands is true.
// Logical NOT (!): Returns the opposite of the operand's boolean value.

let logicalAnd = (true && false); 
console.log("logicalAnd =", logicalAnd);         // logicalAnd = false

let logicalOr = (true || false); 
console.log("logicalOr =", logicalOr);           // logicalOr = true

let logicalNot = !true; 
console.log("logicalNot =", logicalNot);         // logicalNot = false


// Bitwise Operators: These operators perform bitwise operations on binary representations of numeric operands.
// Bitwise AND (&): Performs a bitwise AND operation.
// Bitwise OR (|): Performs a bitwise OR operation.
// Bitwise XOR (^): Performs a bitwise XOR (exclusive OR) operation.
// Bitwise NOT (~): Performs a bitwise NOT (one's complement) operation.
// Left shift (<<): Shifts the bits of the left operand to the left by the number of positions specified by the right operand.
// Right shift (>>): Shifts the bits of the left operand to the right by the number of positions specified by the right operand.
// Unsigned right shift (>>>): Shifts the bits of the left operand to the right by the number of positions specified by the right operand, and fills the leftmost positions with zeros.

let bitwiseAnd = 5 & 3; 
console.log("bitwiseAnd =", bitwiseAnd, "(binary: 0101 & 0011 = 0001)"); // bitwiseAnd = 1 (binary: 0101 & 0011 = 0001)

let bitwiseOr = 5 | 3; 
console.log("bitwiseOr =", bitwiseOr, "(binary: 0101 | 0011 = 0111)"); // bitwiseOr = 7 (binary: 0101 | 0011 = 0111)

let bitwiseXor = 5 ^ 3; 
console.log("bitwiseXor =", bitwiseXor, "(binary: 0101 ^ 0011 = 0110)"); // bitwiseXor = 6 (binary: 0101 ^ 0011 = 0110)

let bitwiseNot = ~5; 
console.log("bitwiseNot =", bitwiseNot, "(binary: ~0101 = 1010, in two's complement representation: -6)"); // bitwiseNot = -6 (binary: ~0101 = 1010, in two's complement representation: -6)

let leftShift = 5 << 1; 
console.log("leftShift =", leftShift, "(binary: 0101 << 1 = 1010)"); // leftShift = 10 (binary: 0101 << 1 = 1010)

let rightShift = 5 >> 1; 
console.log("rightShift =", rightShift, "(binary: 0101 >> 1 = 0010)"); // rightShift = 2 (binary: 0101 >> 1 = 0010)

let unsignedRightShift = -5 >>> 1; 
console.log("unsignedRightShift =", unsignedRightShift, "(binary: 11111111111111111111111111111011 >>> 1 = 01111111111111111111111111111101)"); // unsignedRightShift = 2147483645 (binary: 11111111111111111111111111111011 >>> 1 = 01111111111111111111111111111101)