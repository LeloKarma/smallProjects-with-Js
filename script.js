/* created by LeloKarma */

    <script>
        //creatinng a coffee shop

    console.log("Hello, welcome");
    console.log("we offer coffee for 2$ and cookies for 1$");

    var q1 = window.prompt("how many cups do you need?");
    var q2 = window.prompt("how many cookies do you need?");
    var q3 = window.prompt("how much would you like to spend?");

    console.log(q1 + " " + q2 + " " + q3);
    //parseInt is used to transform string to numbers
    x = parseInt(q1);
    y = parseInt(q2);
    z = parseInt(q3);

    //calculating the costs of the items ordered
    coffee = q1 * 2;
    cookies = q2 * 1;
    
    //adding 0.1 taxes
    var taxes = (coffee + cookies * 0.1);

    //calculating the total bill
    var total = coffee + cookies + taxes + q3;
    console.log("you odered: " + q1 + q2 + "coffee and cookies" );
    console.log("you bill is: " + total + "$" );
    
    </script>
