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
    var num1=prompt("Enter your first number :");
    var num2=prompt("Enter your first number :");

    num1=parseInt(num1, 10);
    num2=parseInt(num2, 10);

    var sum,sub,div,mul,rem;

    sum=num1+num2;
    document.write(num1+"+"+num2+"="+sum+"<br>");

    sum=num1-num2;
    document.write(num1+"-"+num2+"="+sub+"<br>");

    sum=num1/num2;
    document.write(num1+"/"+num2+"="+div+"<br>");

    sum=num1*num2;
    document.write(num1+"*"+num2+"="+mul+"<br>");

    sum=num1%num2;
    document.write(num1+"%"+num2+"="+rem);




</script>

</body> 
</html>
