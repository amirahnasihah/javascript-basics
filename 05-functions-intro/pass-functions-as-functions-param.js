// passing functions as function input

let greet = function(greetMethod, name){
  greetMethod(name); // call the parameter then passing parameter as argument
}

let hello = function(name){
  console.log("hello " + name);
}

let morning = function(name){
  console.log("morning " + name);
}


var user1 = "Cesc";
var time = 9;

if (time < 12) {
  // calling function
  greet(morning, user1); // call greet function, then passing the morning function as argument and user1 variable as argument
}
else {
  greet(hello, user1); // call greet function and passing the hello function as argument into the function greet body
}

// morning Cesc



/////////////////////////////////

const greeting = (name, greetingFunction) => greetingFunction(name);

const sayHello = name => console.log("Hello, " + name)

const sayGoodMorning = name => console.log("Good Morning, " + name);

greeting("Lucio", sayHello); // call function then pass 2 arguments name "Lucio", sayHello
greeting("Lucio", sayGoodMorning);