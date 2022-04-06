/* 6.1 overview of functions-as-a-data-type */



/* 6.2 Storing Function In a Variable */


// using the function variable

let add = function (a,b){
  return a + b;
}

// also function caller
let addResult = add(1,2); // declare variable by calling the function ??
console.log(addResult) // prints the var that


// function caller
console.log(add(1,2))


/*
return statement

- used in function to stop its execution and to return a value to the function caller.
- example above, we set a function and assigned to add var, instead of using the function with funcName.
*/


/* 6.3 Passing Functions as an Input */

// Passing Functions as Function Input
//  - when we want some part of the function logic to be defined by an input(ask users)
//  - the use of function caller can decide a part of the func logic.

let greeting = function(greetingMethod, name){
  greetingMethod(name);
}

let sayHello = function (name){
  console.log("Hello" + name);
}

let sayGoodMorning = function (name){
  console.log(name + ", ")
}