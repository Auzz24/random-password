// Assignment code here

//how long do you want password 
var passwordLength= window.prompt("How many charachters in length do you want your password?")
//length function 
var length = function (length) {
  if(passwordLength > 8 && passwordLength < 128){
    var promptNumber = window.prompt("Would you like to included a number in your passowrd?")
  }
  else(passwordLength < 8 || passwordLength > 128); {
    var promtPasswordError = window.prompt("Please pick a number between 8-128 charachters.")
  }
}
//if less than 8 display password length message 

//if more than 128 display password message

//if between 8-128 ask new question 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

length()