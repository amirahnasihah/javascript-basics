let x = 3;
let b = a++;

console.log(b);

// gives 3

let x = 3;
let b = ++a;

console.log(b);

// gives 4


/*
bcs that is a sequential logic, if do a++ js will return the value of 'a' first and set into 'b'.
at this point, 'b' will be 3.
after the assignment, js will do the addition so 3 becomes 4 now.
js will execute the 'a++' in sequential order
so first executing 'a' and then 'a++'


if want to b become 4, type '++a'. js will add 1 to 'a' first, then assign the value to 'b'
*/