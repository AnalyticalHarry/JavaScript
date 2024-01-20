//creting function positiveNegativeNumber
function positiveNegativeNumber(data) {
    //starting time 
    console.time("Execution Time");
    //for loop to iterate over range of data
    for (let i = 0; i < data.length; i++) {
        //if data elements is greater than zero
        //print positive number
        if (data[i] > 0) {
            console.log("Number is positive: ", i);
        //else if data elements is less than zero
        //print negative number
        } else if (data[i] < 0) {
            console.log("Number is negative: ", i);
        //else to print number is zero
        } else {
            console.log("Number is Zero");
        }
    }
    //ending time for code
    console.timeEnd("Execution Time");
}

//declaring number list from -5 to 5 scale
let numList = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
//callling function and printing on screen
positiveNegativeNumber(numList);
