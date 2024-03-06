// Example 1 : evalauting grade using switch statement
let grade = 'B';
// switch statements
switch(grade){
    case 'A':
        console.log("Excellent performance! you have got an A.");
        break;
    case 'B':
        console.log("Good Job!, you have got a B");
        break;
    case 'C':
        console.log("You have got C, keep working hard.");
        break;
    case 'D':
        console.log("You have got D, you need to improve.");
        break;
    case 'F':
        console.log('You have got F you should consider seeking help.');
        break;
    default:
        console.log('Invalid grade, please enter valid grade.')
}

// ------------------------------------------------------------------------------ // 
// Example 2 : creating function to checking grade with roll number and age 
// student data
const students = [
    { firstName : 'Harry', lastName : 'Thapa', class : 'Mechanical Engineering', rollNumber: 101, dateOfBirth : '1998-11-19', grade : 'B'},
    { firstName : 'Annie', lastName : 'Ross', class : 'Civil Engineering', rollNumber: 204, dateOfBirth : '1997-08-25', grade : 'A'}
];
// function to calculate age from date of birth 
function calculateAge(dateOfBirth){
    const birthDate = new Date(dateOfBirth);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// function to show student information using roll number and date of birth
function studentInfo(rollNumber, day, month, year){
    // Format the date of birth for comparison
    const inputDateOfBirth = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    const inputAge = calculateAge(inputDateOfBirth)
    // find the student in the array by roll number and compare DOB for additional check
    const student = students.find(student => student.rollNumber === rollNumber && student.dateOfBirth === inputDateOfBirth);
    // student is found
    if(student) {
        console.log(`Student Name: ${student.firstName} ${student.lastName}`);
        console.log(`Class: ${student.class}`);
        console.log(`Roll Number: ${student.rollNumber}`);
        console.log(`Age: ${inputAge}`);
        console.log(`Grade: ${student.grade}`);
         // Switch statement for grade
         switch(student.grade) {
            case 'A':
                console.log("Excellent performance! You have got an A.");
                break;
            case 'B':
                console.log("Good Job! You have got a B.");
                break;
            case 'C':
                console.log("You have got a C, keep working hard.");
                break;
            case 'D':
                console.log("You have got a D, you need to improve.");
                break;
            case 'F':
                console.log("You have got an F. You should consider seeking help.");
                break;
            default:
                console.log("Invalid grade, please enter a valid grade.");
            }
        }
    else{
        console.log('Student not found. Please check the roll number and birth date provided.');
    }
}

studentInfo(101, '19', '11', '1998');
studentInfo(204, '25', '08', '1997');

