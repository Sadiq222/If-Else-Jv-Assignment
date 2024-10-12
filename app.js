// question1//


 var character = prompt("Enter a Alphabet or numeric")

 if(character >= "A" && character <="Z" ){
    alert("is an Uppercase Letter ")
}else if (character >= "a" && character <= "z"){
     alert("is an Lowercase Letter <br>")
 } else if(character >="0" && character !="@" ) {
     alert ("is a numeric Digit ")
}else{
    alert( "is not a Alphabetic or numeric Character ")
}

//Question2 


var num1 =+prompt("Enter a first number")
var num2 =+prompt("Enter second number")

if(num1==num2){
    alert("both numbers are equal")
}

else if(num1>num2){
    alert("num1 is larger")
}else {
    alert("num2 is larger")
}


//Question3

var number = prompt("Enter a number")

if (number >=0 ){
    alert( "this number is positive")
}
else if  (number <= 0){
    alert( "This number is negative")
}else  {
 alert("This number is zero")
}


// Question 4
var ch = prompt("Enter a wovels ")


if (ch = "aeiou" ){
    alert("True vowel")    
}else{
    alert("false this wovel")
}




//Question 5



var Password=12345
var value= prompt("Please Enter your Password (12345)")

if(value==Password){
    alert("Password is correct!")
}
else{
    alert("Incorrect Password")
}


//Question 7


var hour=prompt("Please enter time")

if(hour>=13 && hour<=18){
    alert("Good day")
}else{
    alert("Good Evening")
}



