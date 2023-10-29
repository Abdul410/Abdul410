<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
    <script src="index.js"></script>
    <style>
        body{
            background-color: rgb(3, 73, 3);
        }
    </style>
</head>
<body>

<script>
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the last number :");
num1 = parseFloat(num1, 10);
num2 = parseFloat(num2, 10);
var sum, sub;
var sum = num1 + num2;
document.write("addition = "+sum + "<br>");

var sub = num1 - num2;
document.write("substruction = "+sub);



</script>

</body> 
</html>
