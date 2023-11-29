<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <script>
        //food application

        //user credentials
        
        console.log("Hello welcome to the app");
        console.log("lets create an account");
        var username = window.prompt("Please enter a user name");
        var password = window.prompt("Please create a password");
        console.log("Thank you.Your account has been created!");

        //verifying credentials
       console.log("please enter your login");
        var tryUser = window.prompt("Please enter your username");
        var tryPass = window.prompt("please enter your password");
        while(tryUser != username && tryPass != password){

        console.log("Wrong username please try again!");
        var tryUser = window.prompt("Please enter your username");
        var tryPass = window.prompt("please enter your password");
        
          
        }

        console.log("you are connected!");
        
        //creating the account balance
        var balance = 10;
        console.log("Your current amount is " +balance +"$");
        
        var q1 = window.prompt("Would you like to add money in your account?");
        if(q1 == 'yes'){

        var q2 = window.prompt("how much will you like to add?");
         //convert amount added into number
        var balance = balance + Number(q2);
        console.log("your new balance is " + balance + "$");

        }else{
            console.log("Great!")
        }
        //ordering food

        var q3 = window.prompt("would you like a burger?");
        if(q3 == 'yes'){
            console.log("please select the burger you want");
            //creating a variety of food items
            var burgerTypes = ['cheese burger', 'fish burger', 'all-dress burger'];
            var prices = ['2', '3', '5'];
            console.log("choice 1:" + burgerTypes[0] +" "+ prices[0] + "$");
            console.log("choice 2:" + burgerTypes[1] +" "+ prices[1] + "$");
            console.log("choice 3:" + burgerTypes[2] +" "+ prices[2] + "$");
            //getting the choice and calculating the total

            var q4 = window.prompt("what is your choice?");
            if(q4 == '1'){
                console.log("you have ordered:" + burgerTypes[0] +" "+ prices[0]);
                console.log("THe total of the order is:" +prices[0]);
                var balance = balance - prices[0];
                console.log("you have " + balance + "$ left");

            }else if(q4 == '2'){
                console.log("you have ordered:" + burgerTypes[1] +" "+ prices[1]);
                console.log("THe total of the order is:" +prices[1] );
                var balance = balance - prices[1];
                console.log("you have " + balance + "$ left");

            }else if(q4 == '3'){
                console.log("you have ordered:" + burgerTypes[2] +" "+ prices[2]);
                console.log("THe total of the order is:" +prices[2] );
                var total = balance - prices[2];
                console.log("you have " +total+ "$ left");

            }else{
                console.log("Have a good day!");
            }
            

        }
    </script>
</body>
</html>
