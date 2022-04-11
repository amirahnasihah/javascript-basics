// while loop
// keep running the piece code until a condition is met.


///////////////////////////////////

// while loop
// condition: continuing process

while (condition) {
  // do something
}


let numbers = [1,2,3,4,5];
let i = 0;

while (i < 3) {
  console.log(numbers[i]);
  i++;
}

console.log("Loop Finished.");

// 1
// 2
// 3
// Loop Finished


///////////////////////////////////

// do...while loop
// enter a loop, do something first and check the condition, if true keep running.
// js will execute the do something first. even if the condition was never met, js will running the do part once.

do {
  // do something
} while (condition)


let numb = [1,2,3,4,5];
let i = 0;

do {
  console.log(numb[i]);
} while (i < 0); // condition never met with the while condition

console.log("Loop Finished")

// 1
// Loop Finished

// computer will first execute the loop body before it first check the condition.