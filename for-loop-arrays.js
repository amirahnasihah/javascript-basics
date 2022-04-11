// for loop in Array


var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var ouput;
for (i = 0; i < scores.length; i++) {
  output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);
}



///////////////////////////////////


// for...of loop in Array/String

for (let element of Array){
  // do something
}

/* to change the original array when looping */
for (var i = 0; i < 5; i++) {
  array[i] = 0; // 1,2,3,4,5
}


// for...in loop in an Object

for (let property in Object){
  // block of code @ do something
}