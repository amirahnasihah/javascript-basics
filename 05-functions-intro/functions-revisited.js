// Arrow Functions with One Parameter and Expression

const functionB = (input) => {
  let result = 1;
  for (i = 1; i <= input; i++) {
    result = result * i;
  }
  return result;
}

console.log(functionB(3)); // 6



// Arrow Functions with Two Parameter

const functionC = (width, height) => {
  return width * height;
}

console.log(functionC(5, 2)); // 10



// Arrow Functions without Parameter

const functionA = () => console.log("Hello World");

functionA(); // calling function // Hello World




// Arrow Functions with Multiple Statements