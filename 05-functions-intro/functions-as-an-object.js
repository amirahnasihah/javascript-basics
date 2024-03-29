/* 6.1 overview of functions-as-a-data-type */



/* 6.2 Storing Function In a Variable */


/// using the function variable:

let add = function (a,b){
  return a + b;
}

// also function caller
let addResult = add(1,2); // declare variable by calling the function ??
console.log(addResult) // 3
// prints the var that has function assigned to it.


// function caller
console.log(add(1,2) + "\n") // 3

/*
return statement

- used in function to stop its execution and to return a value to the function caller.
- example above, we set a function and assigned to add var, instead of using the function with funcName.
*/


/* 6.3 Passing Functions as an Input */

/// Passing Functions as Function Input:
//  - when we want some part of the function logic to be defined by an input(ask users)
//  - the use of function caller can decide a part of the func logic.


// importanttt!!
// example below 3 functions:
let greeting = function(greetingMethod, name){
  greetingMethod(name);
} // greetingMethod: expected to be a function bcs want to say diff things or scenario. ex; want this function to behave depend on what are the greetingMethod we want.
  // name: want it to be a string.

let sayHello = function (name){
  console.log("Hello " + name);
}

let sayGoodMorning = function (name){
  console.log(name + ", good morning!");
}


var user1 = "Peter" // declare var to get print out
var time = 9 //9 am

if (time < 12){
  greeting(sayGoodMorning, user1)
} else{
  greeting(sayHello, user1)
}

// shows diff scenario before 12 & after 12.
// sayGoodMorning(name)
// sayHello(name)




/// why do we want to have functions as input???:

//  - to have diff handling after executing the main logic in a function.
//  - ex; if I have an 'add' function, after calculating the sum,  how to handle it?
//    - print out? Updaate UI? Send in email or ws??



// parameters can contain inputs, and function.
// meaning parameters act as a placeholder variable to make it easy to declare it.

let printResult = function(result){
  console.log(result);
}

let saveToFile = function(result){
  // Logic to save in file
}

let sendEmail = function(result){
  // Logic to send the input in email
}

let add1 = function(a1, b1, handling) {
  let sum = a1 + b1;
  handling(sum);
}
// handling: expected as function
// a, b: expected as inputs



// different use case scenarios; ↓↓
add1(1, 2, sendEmail);
add1(1, 2, saveToFile);
add1(1, 2, printResult);

// 3
