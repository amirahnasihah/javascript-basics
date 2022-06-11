// Declare String Variables
var firstName = "Anthonio";
var lastName = "Vivaldi";


// Escaping Literal Quotes
var str = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(str);


// Quoting Strings with Single Quotesor Backtick ``
var quoteStr = '<a href="https://www.google.com" target="_blank">Link</a>';
console.log(quoteStr);


// Escape Sequences
/*****
CODE	OUTPUT
\'		single quote
\"		double quote
\\		backslash
\n		newline
\r		carriage return
\t		tab
\b		backspa
\f		form feed
*****/


// Concantenate String with Plus symbol
var myStr = "The first string. " + "The second string."
console.log(myStr);

// Concantenate String with Plus Operator
var myStr1 = "I come first. ";
myStr1 += "I come second.";
console.log(myStr1);