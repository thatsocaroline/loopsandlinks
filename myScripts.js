/*Below is the for loop */
document.write("Using Math.sqrt <br/>")
for(var k = 0; k < 9; k++)
  {
    var ans = Math.sqrt(k);
    document.write(ans + "<br/>");
  }

/*Below is the while loop*/
document.write("<br/>  Using Math.random")

var beginning = 40;

while(beginning > 0)
   {
    document.write("<br />Current Count: " + beginning )
    beginning = Math.random () * 11;
     beginning--;
  }
