// expression

const functionB = (input) => {
  let result = 1;
  for (i = 1; i <= input; i++) {
    result = result * i;
  }
  return result;
}

console.log(functionB(3)); // 6


// q 2.1.3

const functionC = (width, height) => {
  return width * height;
}

console.log(functionC(5, 2)); // 10