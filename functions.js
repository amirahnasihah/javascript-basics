/* The return Statement */

// used in function to stop its execution and to return a value to the function caller.

// addNumbers() function return the sum of its arguments (num2)
function addNumbers(num1, num2){
  let sum = num1 + num2;
  return sum;
}

// function caller
console.log(addNumbers(2,5)) // 7

addNumbers(2, 5) // not work, need to use with print statement (console.log || document.write)

