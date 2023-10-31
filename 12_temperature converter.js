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
               // Fahrenheit to Celcius//


        
          var F=68;
           C=(F-32)*5/9;
            document.write("Celcius is "+C+" degree when Fahrenheit is 68 F"+"<br>");

                //Celcius to Fahrenheit//

            var C=26;
            F=(9*C)/5+32;
          document.write("Fahrenheit is"+F+" degree when celcius is 26 C");
</script>

As a variant////////

         <script>
               // Fahrenheit to Celcius//


          var F=parseInt(prompt("Enter Fahrenheit :"));
           C=(F-32)*(5/9);
            document.write("Celcius is "+C+"<br>");


                //Celcius to Fahrenheit//


        var C=parseInt(prompt("Enter Celcius :"));
           F=(9*C)/5+32;
           document.write("Fahrenheit is "+F);
//Metre to Kilometre////

            var metre=prompt("Enter the metre number here :")
//var metre=4000;
km=metre/1000;
document.write("when metre is "+metre+" metre then kilometre is "+km+" km");

        </script>
    </body> 
</html>
