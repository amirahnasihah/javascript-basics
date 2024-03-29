/* JS FUNCTIONS */

// a function is a js method.
// set of statements that do a task or gives/produces a value.
// function is executed/printed when we called (invoked) them by something.


/* Function Definition */

// defined function keyword with:
//  - function name.
//  - parameters/inputs enclosed in (para1, para2)
//  - block of codes or statements enclosed with {}

function functionName(input1, input2, input3) {
  // codes or statements to be executed
}

// parameters act as a placeholder variables inside the function.
// when we called the function, the variables are assigned to the arguments(value) provided.
// can be called when an event happens.

/* NOTE:
a placeholder is a character, word, or string of characters that 
temporarily takes the place of the final data.
*/

// defining function
function writeText(string) {
  // document.getElementById("demo").innerHTML = string;  (when with HTML)
}

// calling function
writeText("Hello JavaScript!");


// other way calling function.
// function dont require parameters (optional)
function showDialog() {
  alert("This is JS"); // use with HTML
}

function showText() {
  return "Helloooo";
}

console.log(showText);


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

// BMI = weight / height²
function bmi(weight, height){
  let sqrHeight = height * height;
  return weight / sqrHeight;
}

// calling the function
console.log(bmi(39, 157));
