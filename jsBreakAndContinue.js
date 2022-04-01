// JavaScript Break and Continue

/*
the `break` and `continue` statements are often used in loops
*/

// The break Statement
/*
- terminates the execution of the current loop.
- after terminate, the execution proceeds to the next statement following the loop.
*/

<html>
<head>
   <title> Try It Yourself </title>
</head>
<body>
   <ul id="demo"></ul>

   <script>
      var html = "";
      for(var i = 0; i < 10; i++) {
         if(i == 5) {
            break;
         }
         html += "<li>Number " + i + "<li>"; // add string to html
      }

      document.getElmentById("demo").innerHTML = html;
   </script>
</body>
</html>
