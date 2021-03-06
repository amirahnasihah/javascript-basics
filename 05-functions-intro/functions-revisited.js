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

const greeting = (name, greetingFunction) => greetingFunction(name);

const sayHello = name => console.log("Hello, " + name)

const sayGoodMorning = name => console.log("Good Morning, " + name);

greeting("Lucio", sayHello); // call function then pass 2 arguments name "Lucio", sayHello
greeting("Lucio", sayGoodMorning);