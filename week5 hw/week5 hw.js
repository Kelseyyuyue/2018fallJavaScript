// Reverse Exercise

function reverseString(str) {
    
    var splitString = str.split(""); ;
   
    var reverseArray = splitString.reverse(); 
 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}
 
reverseString("hello Kelsey");

// Leap Year  
// create a function that accept a date and calculate if it falls on a leap year

year = window.prompt("Input a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
console.log(x);



//Area of circle
//create a function that can return the circumference and a area of circle when provide a radius value.
function circleArea(radius) {
    let area = Math.PI * (radius * radius);
    console.log(area);
    console.log(Math.round(area*100)/100);
}
 
circleArea(5);

// var radius = prompt('Please enter the radius:');
// var areaCircle = Math.PI radius radius;
// return areaCircle;




// word count
//create a function that can perform a word count,given a block of text. 
//Punctuations or special character are not to be included.

// <HTML>
// <HEAD>
// <SCRIPT>
str = str.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ");

function countWords(str){
   var count = 0;
   words = str.split(" "); 
    for (i=0 ; i < words.length ; i++){
       // inner loop -- do the count
       if (words[i] != "")
          count += 1; 
    }

   document.theForm.results.value = 
      "There are " +
      count +
      " words in the text string you entered!";
}
// </SCRIPT>

// // </HEAD<BODY>
// // <FORM name="theForm">
// Enter a text string:
// <TEXTAREA name=inStr rows=5 cols=90>
// </TEXTAREA>

// <INPUT type=button value="Count Words" onClick="countWords(document.theForm.inStr.value)";>
// <INPUT type=button name="theButton" value="Clear Results" onClick='document.theForm.results.value=""';>
// Results<br>
// <TEXTAREA name=results rows=5 cols=90>
// </TEXTAREA>

// </FORM>  
// </BODY>
// </HTML>



/// palindrome
//create a function that checks a string or sentence and reture value if that parameter
//is a palindrome.(the string is the same forward as it is backward.)


function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
palindrome("madam, Star Wars, a canal. Panama");




