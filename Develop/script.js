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
 // Length confirmation user prompt
  var confirmLength = parseInt(prompt("How many characters between 8-20 would you like your password to have?"));
  while ( confirmLength <=8 || confirmLength >=20){
    alert ("Your password will contain" + confirmLength + "characters.")
  };
  
    var confirmNumber = confirm("Would you like your password to contain numerical characters?");
    var confirmCharacter = confirm("Would you like your password to contain special characters?");
    var confirmLowercase = confirm("Would you like your password to contain lowercase characters?");
    var confirmUppercase = confirm("Would you like your password to contain uppercase characters?");
  };

// Password Parameters

var passwordCharacters = []
if (confirmNumber) {
  passwordCharacters = passwordCharacters.concat(number)
}
if (confirmCharacter) {
  passwordCharacters = passwordCharacters.concat(specialCharacter)
}
if (confirmLowercase) {
  passwordCharacters = passwordCharacters.concat(LowerCase)
}
if (confirmUppercase) {
  passwordCharacters = passwordCharacters.concat(UpperCase)
}

console.log(passwordCharacters)

function writePassword();
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
