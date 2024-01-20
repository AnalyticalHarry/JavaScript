//function to separate even and odd numbers from an array
function evenOddFinder(data) {
    //initialise arrays to store even and odd numbers
    let even = [];
    let odd = [];

    //loop through the elements in the input array
    for (let i = 0; i < data.length; i++) {
        //if the current element is even
        if (data[i] % 2 === 0) {
            //if even, add it to the 'even' array
            even.push(data[i]);
        } else {
            //if odd, add it to the 'odd' array
            odd.push(data[i]);
        }
    }

    //return an object containing 'even' and 'odd' arrays
    return { even, odd };
}

//array of numbers
var numList = [0, 1, 2, 3, 4, 5, -5, -4, -3, -2, -1];
//function and store the result 
const result = evenOddFinder(numList);
//even and odd numbers
console.log("Even numbers:", result.even);
console.log("Odd numbers:", result.odd);
