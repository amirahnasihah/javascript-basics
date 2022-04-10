const functionA = function factorial(input){
  let result = 1;
  for (i = 1; i <= input; i++) {
    result = result * i;
  }
  return result;
}

console.log(functionA(8))