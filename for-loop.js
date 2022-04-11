// for loop is used in Array @ string

// for loop syntax
for (initialization; condition; after interation) {
  // do something
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


///////////////////////////////////

// for...in loop in an Object

for (let property in Object){
  // block of code @ do something
}

/* to get the property name: */
let obj = {
  "brand": "Bendi",
  "color": "red",
  "price": 200
}

for (property in obj) {
  console.log(property);
}

// brand
// color
// price


/* to get the value */
for (property in obj) {
  console.log(obj[property]);
}

// Bendi
// red
// 200