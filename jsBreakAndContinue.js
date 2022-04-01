// JavaScript Break and Continue

/*
the `break` and `continue` statements are often used in loops
*/

// The `break` Statement
/*
- terminates the execution of the current loop.
- after terminate, the execution proceeds to the next statement following the loop.
*/

-snip
<ul id="demo2"></ul>

var html = " ";
for (var i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  html += "<li>Number " + i + "<li>"; // add string to html
}

document.getElmentById("demo2").innerHTML = html;

/*
Instead printing 10 numbers, only 5 numbers were printed.
Because when `i` is equal to `5` the next iteration was stopped using the `break` statement.
After that, the program executed the next statement that printed `html` string instead of adding more strings to the `html` variable.
*/

// The `continue` Statement

