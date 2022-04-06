/*
Logical operators often use with Conditional operators

How To Use Conditional Operators
*/

// simple condition
let A = 10;
let B = 20;

let C = (A == B); // C = false
let D = (B > A);  // D = true


// complex condition
let a = 10;
let b = 20;
let c = 30;


let d = (a > b && c > b); // d = false
let e = (a > b || c > b); // e = true
let f = !e; // f = false

/*
a | b => a && b

true | true => true
true | false => false
false | true => false
false | false => false


a | b => a || b

true | true => true
true | false => true
false | true => true
false | false => false

*/


// becareful about ==
let aa = 10;
let bb = "10";

let dd = (a == b); // d = true
let ee = (a === b);  // strict equality: e = false


const z = true || false;
console.log(z);