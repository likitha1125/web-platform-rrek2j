//Challenge 1
// Step 1: Create a function with the function name as ageCalculator and pass two parameters, first one is birthYear and the second one is the presentYear.
//Step 2: Pass two arguments as birthYear and presentYear while calling the function.
//Step 3: Calculate the possible age and return it.
//Step 4: Display the age on the console.
// Your code goes here
function ageCalculator(birthYear, presentYear) {
  let age = presentYear - birthYear;
  return age;
}

const birthYear = 2001; 
const presentYear = 2023; 
const calculatedAge = ageCalculator(birthYear, presentYear);
console.log("Age: " + calculatedAge);


//Challenge 2: Following is the code snippet commented , remove the comments and get started with the challenge. Find the errors and rewrite the function.
function Addition(a, b)
 {
  let result = a + b;
  console.log(result);
  return result;
}
Addition(2, 3);


//Challenge 3:
// Step 1: Declare the variable "x" with "var" keyword and store a string value "I can access it."
//Step 2: Console log the value above the declaration of x variable.
//Step 3: Console log the value after the decalaration of x.
console.log("I can access it.");
var x = "I can access it.";
console.log(x);
//Challenge 4: Create an arrow function for adding two numbers. Console log the value.
const addNumbers = (a, b) => {
  let result = a + b;
  console.log(result);
  return result;
}

addNumbers(10, 3);











