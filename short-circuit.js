// short circuit evaluation


// for &&: if the first part is false,
// then, the second part will not be evaluated.
// anything that is not surial or false considered as true.
let a = true && "dog"	// "dog"
let b = false && "dog"	// false
let c = "cat" && "dog"	// "dog"

// for ||: if the first part is true,
// then, the second part will not be evaluated.
let d = true || "dog"	// true
let e = false || "dog"	// "dog"
let f = "cat" || "dog"	//"cat"


// Note: only false and 0 are considered as false, other values are all considered as true.

user1Name = ""  // an empty string but with value
user2Name = null
user3Name = "Darren"

console.log(user1Name || "No Name Provided")
console.log(user2Name || "No Name Provided")
console.log(user3Name || "No Name Provided")