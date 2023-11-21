/* created by leloKarma */

<script>
  //storing user input in variables
        var a = window.prompt("Please write down a name");
        var b = window.prompt("Please write down color");
        var c = Number(window.prompt("Please write down a number"));
        var d = Number(window.prompt("Please write down another number"));

//creating a function with parameters
     function quest(name, color, num1, num2)
     {
          console.log("The selected name is " +name);
          console.log("The  selected color name is " +color);
          console.log("The selected number is " +num1);
          console.log("The selected number2 is " +num2);
          
     }
//calling the function while passing the user inputs as arguments
     quest(a, b, c, d);
    </script>
