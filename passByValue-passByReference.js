// pass-by-value
// if pass a primitive data type (make a  copy)

let age = 7;

function addOne(x){
  x++;
}

addOne(age);
console.log(age); // 7

// x is a copy (age = 7 is copied into x)
// age is original and untouched when we log it.
// x is a copy and is incremented by 1, age is untouched


// pass-by-reference
// if pass an object or array
// original is touched(changed)

function doSome(param1){
  param1.name = "Tommy";
}

let a = {"name": "jerry"}; // this is array
// call the function
doSome(a)
console.log(a.name); // log the name property only