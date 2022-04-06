// JavaScript Break and Continue

/*
the `break` and `continue` statements are often used in loops
*/

// The `break` Statement
/*
- terminates the execution of the current loop.
- after terminate, the execution proceeds to the next statement following the loop.
*/

-snip -
    <
    ul id = "demo2" > < /ul>

var html = " ";
for (var i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    html += "<li>Number " + i + "<li>"; // add string to html
}

document.getElmentById("demo2").innerHTML = html; -
-snip -

    /*
    - Instead printing 10 numbers, only 5 numbers were printed.
    - Because when `i` is equal to `5` the next iteration was stopped using the `break` statement.
    - After that, the program executed the next statement that printed `html` string instead of adding more strings to the `html` variable.
    */

    // The `continue` Statement

    /*
    - terminates execution of the statements in the current iteration of the current loop.
    - And continues the execution of the loop with the next iteration.
    */

    -snip -

    var html = "";
for (var i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    html += "<li>Number " + i + "</li>"; // add string to html
}

/*
- As above, only "Number 5" was missing.
- Because `continue` statement terminated the execution of the current iteration when `i` is equal to 5.
- After that, the program continued the execution of the next iteration.
*/