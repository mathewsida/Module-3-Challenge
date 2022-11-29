// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordLength;
var lower;
var uppercasecheck;
var numcheck;
var confirmSpecial;
var userChoices;
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
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
    lower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + Lower);
    uppercasecheck = confirm("Will this contain upper case letters?");
    console.log("Upper case " + uppercasecheck);
    numcheck = confirm("Will this contain numbers?");
    console.log("Number " + numcheck);
    confirmSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + confirmSpecial);

  };

  if (!lower && !uppercasecheck && !numcheck && !confirmSpecial) 
  {
    userChoices = alert("You must choose a criteria");



  } else if (lower && uppercasecheck && numcheck && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }



  else if (lower && uppercasecheck && numcheck) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }


  else if (lower && uppercasecheck && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  }


  else if (lower && numcheck && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);


  }
  else if (uppercasecheck && numcheck && confirmSpecial) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }



  else if (lower && uppercasecheck) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }


  else if (lower && numcheck) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }


  else if (lower && confirmSpecial) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }


  else if (uppercasecheck && numcheck) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }


  else if (uppercasecheck && confirmSpecial) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }


  else if (numcheck && confirmSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }

  else if (lower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }


  else if (uppercasecheck) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }

  
  else if (numcheck) {
    userChoices = numbers;
    console.log(userChoices);
  }


  else if (confirmSpecial) {
    userChoices = special;
    console.log(userChoices);
  };


  var passwordBlank = [];
  

  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}
