// Assignment Code
var generateBtn = document.querySelector("#generate");

var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var NumberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var SpecialChar = ["!", "#", "$", "%", "&", "'", "(", "*", "+", ",", "-", "/", ":", ";", "<=>?@[\]^_`{|}~"];

// Password Function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Password Prompts
function generatePassword() {
  //console.log
  var pass_length = parseInt(prompt("How many characters  between 8 and 20 should your password have?"));
  if (pass_length >= 8 && pass_length <= 20) {
    alert("Your password will contain those characters.")
  } else {
    alert("Insufficient Password")
    generatePassword()

  }
  var genLowerCase = confirm("Do you want lowercase characters?")
  var genUpperCase = confirm("Do you want uppercase letters?")
  var genNumber = confirm("Do you want numbers?")
  var genSpecial = confirm("Do you want special characters?")
  var randomPassword = ""
  var outputPassword = ""
  var randomIndex = 0
  var possibles = []

  console.log(genLowerCase, genUpperCase, genNumber, genSpecial);
  let answers = [genLowerCase, genUpperCase, genNumber, genSpecial]
  let trues = answers.filter(answer => answer == true)
  
  if (trues.length == 0) {
    alert("No valid options selected")
    generatePassword()
  }

  if (LowerCase) {
    console.log("yes for lower case")
    possibles.push(LowerCase);
  } else {
    console.log("no for lower case");
  }

  if (UpperCase) {
    console.log("yes for upper case")
    possibles.push(upperCaseChar);
  } else {
    console.log("no for upper case");
    
  }

  if (NumberChar) {
    console.log("yes for number")
    possibles.push(NumberChar);
  } else {
    console.log("no number");
    
  }

  if (SpecialChar) {
    console.log("yes for special")
    possibles.push(SpecialChar);
  } else {
    console.log("no special");
    
  }

  possibles.flat()
    
  for (var i = 0; i < pass_length; i++) {
    // Add a random accepted character to the random password
    let random_arr = possibles[Math.floor(Math.random() * possibles.length)]
    let random_char = random_arr[Math.floor(Math.random() * random_arr.length)]
    outputPassword += random_char
  }



  return document.getElementById("password").value = outputPassword;
}

function newFunction() {
  console.log(answers);
}



// event listener to generate button
generateBtn.addEventListener("click", writePassword);