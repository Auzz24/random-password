var passwordLength= window.prompt("How many total charachters do you want in your password?");
console.log(passwordLength);
if (passwordLength < 8 || passwordLength > 128); {
  window.alert("Please select a number between 8-128 charachters.");
};

var passwordCapital= window.confirm("Do you want to add a capital letter?");
console.log(passwordCapital);

var passwordLowercase= window.confirm("Do you want to add lowercase letters to your passsword?");
console.log(passwordLowercase);

var passwordNumber= window.confirm("Do you want to add a number into your passowrd?");
console.log(passwordNumber);

var passwordSpecial= window.confirm("Do you want to add a special charachter?");
console.log(passwordSpecial);

//length function 
//var length = function (length) {
  //if(passwordLength > 8 && passwordLength < 128){
    //var promptNumber = window.confirm("Would you like to included numbers in your passowrd?");
  //}
  //else(passwordLength < 8 || passwordLength > 128); {
    //var promtPasswordError = window.alert("Please pick a number between 8-128 charachters.")
  //}
//}; 

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


//length()






//function start(){
  //window.confirm("Do you want to create a password?");
//}

//If yes send to this prompt 
//
//length function 
//var length = function (length) {
  //if(passwordLength > 8 && passwordLength < 128){
    //var promptNumber = window.confirm("Would you like to included numbers in your passowrd?");
  //}
  //else(passwordLength < 8 || passwordLength > 128); {
    //var promtPasswordError = window.alert("Please pick a number between 8-128 charachters.")
  //}
//}; 

//if no
//console.alert("Thank you, goodbye")





//start()







// Assignment code here




//colsole logs 

//how long do you want password 



//add capital letter or not
//var numbers = passwordLength
 //if(
 //var promtCapital = window.confirm ("Would you like to add a capital letter?")


//var promptNumber= function (number){


//number function 




//special charachter function 