/*
Logical operators often use with Conditional operators

How To Use Conditional Operators
*/

// simple condition
let a = 10;
let b = 20;

let c = (a == b); // c = false
let d = (b > a);  // d = true


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
let a 