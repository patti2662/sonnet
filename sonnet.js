// Take the contents of the sonnet div and place it in a variable
var shake = document.getElementById("sonnet").innerHTML;
console.log("chief", shake);


// Find and output the starting position of the word "orphans

var words = shake.indexOf("orphans");
console.log("chief", words);


// Output the number of characters in the sonnet

var coke = shake.length;
console.log("cdr", coke);

// Replace the first occurance of the string "winter" with "yuletide"

var ring = shake.replace("winter", "yuletide");
console.log("snickers", ring);

// Replace all occurances of the string "the" with "a large"

var pen = shake.replace(/the/g, "a large");
console.log("hat", shake);

// Set the content of the sonnet div with the new string

sonnet.innerHTML = pen;r
console.log("sonnetString from the DOM", sonnet.innerHTML);
