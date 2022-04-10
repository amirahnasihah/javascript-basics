const functionA = function factorial(input){
  let result = 1;
  for (i = 1; i <= input; i++) {
    result = result * i;
  }
  return result;
}

console.log(functionA(3)) // 6

// test to check 1(i) less than 3(input), so 1 + 1 (increment)
// 1(result) * 1