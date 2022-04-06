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
function getFullName(firstName, lastName){
  return firstName + " " + lastName;
}

let fullName = getFullName("Lucio", "Vivaldi");
console.log(fullName); // call the function through declaring a variable.


/* Why use Functions??? */

// so we can reuse the same code many times.

// example want to convert kilometer to miles.
function toMiles(kilometer){
  let miles = kilometer * 0.62137;
  return kilometer + " km/s equals to " + miles + " miles.";
}

// reuse the function as many times as we want
// maybe by diff print statement ??
/* alert(toMiles(3)); */ // with HTML
/* document.write(toMiles(5)); */ // use with HTML
console.log(toMiles(10));

// BMI = weight * height²
function bmi 