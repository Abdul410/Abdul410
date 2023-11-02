<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
    <script src="index.js"></script>
    <style>
        body{
            background-color: #0b540b;
        }
    </style>
</head>
<body>

        <script>
    var num1=prompt("enter the marks here :")
    if(num1>=80 && num1<=100)
    document.write(num1+" so it's "+"A+"+"<br>");

    else if(num1>=70 && num1<=79)
    document.write(num1+" so it's "+"A");

    else if(num1>=60 && num1<=69)
    document.write(num1+" so it's "+"A-");

    else if(num1>=50 && num1<=59)
    document.write(num1+" so it's "+"B");

    else if(num1>=40 && num1<=49)
    document.write(num1+" so it's "+"C");

    else if(num1>=33 && num1<=39)
    document.write(num1+" so it's "+"D");

    else
    document.write(num1+" so it's "+"Failed");


        </script>
    </body> 
</html>
