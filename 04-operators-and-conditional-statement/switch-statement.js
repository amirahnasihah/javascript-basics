// switch statement


// With break Keyword

let city = "Mumbai";
      
      switch(city) {
         case "Washington, D.C.":
            console.log("It is the federal capital city of the United States.");
            break;
         case "Mumbai":
            console.log("It is the capital city of India.");
            break;
         case "Abuja":
            console.log("It is the capital city of Nigeria.");
            break;
      }

console.log("\n")

// Without break Keyword

let fruit = "apple";
      
      switch(fruit) {
         case "apple": // fruit is apple so the code below will now run
            console.log("The color is red.");
            // no break is given here
         case "strawberry": // this case and the following one will still run
            console.log("The color is pink.");
         case "mango":
            console.log("The color is yellow.");
      }
      

console.log("\n")

// With default Keyword

let sweet = "rock";
      
      switch(sweet) {
         case "apple":
            console.log("The color is red.");
            break;
         case "strawberry":
            console.log("The color is pink.");
            break;
         case "banana":
            console.log("The color is yellow.");
            break;
         default:
            console.log("That is not a fruit.");
            break;
      }
      
