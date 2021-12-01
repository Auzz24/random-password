
var passwordNumber= window.prompt("How many total charachters do you want in your password?");
//console.log(passwordNumber);
if (passwordNumber < 8 || passwordNumber > 128) {
  window.alert("Please select a number between 8-128 charachters.");
} //reload page???
else { 
const characters ='abcdefghijklmnopqrstuvwxyz';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
};

console.log(generateString(passwordNumber));
//};


//const charachters = "abcdefghijklmnopqrstuvwxyz"

//function generateString(length){
  //let result = '';
  //const charachtersLength = charachters.length;
  //for (let i=0; i<length; i*passwordNumber){
 //   //result += charachters.charAt(math.floor(Math.random()* charachtersLength));
  //}

  //return result;

//}
  
  //console.log(generateString(5));


//go onto passwordCapital 

//var passwordCapital= window.confirm("Do you want to add a capital letter?");
//console.log(passwordCapital);
//if (){
  //add a captial letter to the randomPassword varible; 
//}
//else(){
//dont)
 //}


 // go to next question passwordNumber

//var passwordNumber= window.confirm("Do you want to add a number into your passowrd?");
//console.log(passwordNumber);
//if (){
  //add a captial letter to the randomPassword varible; 
//}
//else(){
//dont)
// }


// go to passwordSpecial

//var passwordSpecial= window.confirm("Do you want to add a special charachter?");
//console.log(passwordSpecial);
//if (){
  //add a captial letter to the randomPassword varible; 
//}
//else(){
//dont)
// }




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






//length function 
//var length = function (length) {
  //if(passwordLength > 8 && passwordLength < 128){
    //var promptNumber = window.confirm("Would you like to included numbers in your passowrd?");
  //}
  //else(passwordLength < 8 || passwordLength > 128); {
    //var promtPasswordError = window.alert("Please pick a number between 8-128 charachters.")
  //}
//}; 

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