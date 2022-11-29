// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordLength;
var lower;
var uppercasecheck;
var numcheck;
var confirmSpecial;
var input;
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blankUpper = [];


var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Start Function
function generatePassword() {
  // Ask four user Input
  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Required value");

  } 
  
  else if (passwordLength < 8 || passwordLength > 128) 
  {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  
  } 
  
  else 
  { 
    lower = confirm("Will your password contain lower case letters?");
    console.log("Lower case " + lowerCase);
    uppercasecheck = confirm("Will your password contain upper case letters?");
    console.log("Upper case " + uppercasecheck);
    numcheck = confirm("Will your password contain numbers?");
    console.log("Number " + numcheck);
    confirmSpecial = confirm("Will your password contain special characters?");
    console.log("Special Character " + confirmSpecial);

  };

  if (!lower && !uppercasecheck && !numcheck && !confirmSpecial) 
  {
    input = alert("You must choose a criteria");



  } else if (lower && uppercasecheck && numcheck && confirmSpecial) {
    input = lowerCase.concat(upperCase, numbers, special);
    console.log(input);
  }



  else if (lower && uppercasecheck && numcheck) {
    input = lowerCase.concat(upperCase, numbers);
    console.log(input);
  }


  else if (lower && uppercasecheck && confirmSpecial) {
    input = lowerCase.concat(upperCase, special);
    console.log(input);
  }


  else if (lower && numcheck && confirmSpecial) {
    input = lowerCase.concat(numbers, special);
    console.log(input);


  }
  else if (uppercasecheck && numcheck && confirmSpecial) {
    input = upperCase.concat(numbers, special);
    console.log(input);
  }



  else if (lower && uppercasecheck) {
    input = lowerCase.concat(upperCase);
    console.log(input);
  }


  else if (lower && numcheck) 
  {
    input = lowerCase.concat(numbers);
    console.log(input);
  }


  else if (lower && confirmSpecial) {
    input = lowerCase.concat(special);
    console.log(input);
  }


  else if (uppercasecheck && numcheck) {
    input = upperCase.concat(numbers);
    console.log(input);
  }


  else if (uppercasecheck && confirmSpecial) {
    input = upperCase.concat(special);
    console.log(input);
  }


  else if (numcheck && confirmSpecial) {
    input = numbers.concat(special);
    console.log(input);
  }

  else if (lower) {
    input = lowerCase;
    console.log(input);
  }


  else if (uppercasecheck) {
    input = blankUpper.concat(upperCase);
    console.log(input);
  }

  
  else if (numcheck) {
    input = numbers;
    console.log(input);
  }


  else if (confirmSpecial) {
    input = special;
    console.log(input);
  };


  var passwordBlank = [];
  

  for (var i = 0; i < passwordLength; i++) {
    var allChoices = input[Math.floor(Math.random() * input.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}
