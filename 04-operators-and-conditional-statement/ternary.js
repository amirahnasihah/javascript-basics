// operator that takes 3 operands
// consider it as shorthand for if...else statement

// condition ? value1 : value2;
// if the condition is true, the operator returns value1, otherwise returns value2
// commonly use with a variable

// example
let a = 10;
let b = 20;
let c = a > b ? "a is larger" : "b is larger";

console.log(c)

// c should be equals to "b is larger"
// after get the value 'a' or 'b', the we let the string into 'c'. going to assigned the value into 'c'


// Code Rewriting

const studentAScore = 72;
const studentBScore = 86;

let bestStudent;

if (studentAScore >= studentBScore){
  bestStudent = "A";
} else {
  bestStudent = "B";
}


// rewrite by using Ternary Operator

let bestStudent = studentAScore >= studentBScore ? "a is larger" : "b is larger";

console.log(bestStudent)
