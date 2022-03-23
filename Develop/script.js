// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Variables
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "?", "&", "%", "*", "$", "~", "(", ")", "-"]
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration
var confirmLength = "";
var confirmNumber;
var confirmCharacter;
var confirmLowercase;
var confirmUppercase;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  enter = parseInt(prompt("How many characters between 8-20 would you like your password to have?"));
  if (!enter) {
    alert("Please enter value")
  } else if (enter < 8 || enter > 20) {
    enter = parseInt(prompt("Choose a number between 8 and 20"));
  } else {
    confirmNumber = confirm("Would you like your password to contain numerical characters?");
    confirmCharacter = confirm("Would you like your password to contain special characters?");
    confirmLowercase = confirm("Would you like your password to contain lowercase characters?");
    confirmUppercase = confirm("Would you like your password to contain uppercase characters?");
  };

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
