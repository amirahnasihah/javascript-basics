// Traditional Anonymous Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;




///////////////////////////////////

// Traditional Anonymous Function
function (a, b){
  return a + b + 100;
}

// Arrow Function
(a, b) => a + b + 100;

// Traditional Anonymous Function (no arguments)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// Arrow Function (no arguments)
let a = 4;
let b = 2;
() => a + b + 100;


///////////////////////////////////

// Traditional Anonymous Function
function (a, b){
  let chuck = 42;
  return a + b + chuck;
}

// Arrow Function
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}


///////////////////////////////////

/* for named functions we treat arrow expressions like variables */

// Traditional Function
function bob (a){
  return a + 100;
}

// Arrow Function
let bob = a => a + 100;



//////

// One param. With simple expression return is not needed:

/* param => expression */


// Multiple params require parentheses. With simple expression return is not needed:

/* (param1, paramN) => expression */



// Multiline statements require body braces and return:


param => {
  let a = 1;
  return a + param;
}
Copy to Clipboard
Multiple params require parentheses. Multiline statements require body braces and return:

(param1, paramN) => {
   let a = 1;
   return a + param1 + paramN;
}