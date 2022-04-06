/* The return Statement */

// used in function to stop its execution and to return a value to the function caller.

// addNumbers() function return the sum of its arguments (num1 + num2) to the function caller.
function addNumbers(num1, num2){
  let sum = num1 + num2;
  return sum;
}

// function caller
console.log(addNumbers(2,5)) // 7

addNumbers(2, 5) // not work, need to use with print statement (console.log || document.write)

/*
document.getElementById('demo').innerHTML =
addNumbers(2,5) // use with HTML
*/

// other example of function caller
// by declare a var
// where the returned value assigned to variable. and then variable is used in a statement of function.
function getFullName