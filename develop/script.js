function randomPassword() {
  var passwordLength = window.prompt("How many total charachters do you want in your password?");
  //console.log(passwordNumber);

  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please select a number between 8-128 charachters!");
    passwordLength = window.prompt("How many total charachters do you want in your password?");
  }

  var passwordLower = window.confirm("Do you want to add a lowercase letter?");
  //console.log(passwordlower);

  var passwordCapital = window.confirm("Do you want to add a capital letter?");
  //console.log(passwordCapital);

  var passwordNumber = window.confirm("Do you want to add a number into your passowrd?");
  //console.log(passwordNumber);

  var passwordSpecial = window.confirm("Do you want to add a special charachter?");
  //console.log(passwordSpecial);

  var lowercasePool = 'abcdefghijklmnopqrstuvwxyz'

  var capitalPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  var numberPool = '0123456789'

  var specialPool = '!@#$%^&*()'

  if (passwordLower && passwordCapital && passwordNumber && passwordSpecial) {

    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()';
    function lowerCapitalNumberSpecialString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      result += lowercasePool.charAt(Math.floor(Math.random() * lowercasePool.length));
      result += capitalPool.charAt(Math.floor(Math.random() * capitalPool.length));
      result += numberPool.charAt(Math.floor(Math.random() * numberPool.length));
      result += specialPool.charAt(Math.floor(Math.random() * specialPool.length));
      for (let i = 0; i < length - 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    return (lowerCapitalNumberSpecialString(passwordLength));
  }


  else if (passwordLower && passwordCapital && passwordNumber) {

    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    function lowerCapitalNumberString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      result += lowercasePool.charAt(Math.floor(Math.random() * lowercasePool.length));
      result += capitalPool.charAt(Math.floor(Math.random() * capitalPool.length));
      result += numberPool.charAt(Math.floor(Math.random() * numberPool.length));
      for (let i = 0; i < length -3; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    return (lowerCapitalNumberString(passwordLength));
  }

  else if (passwordLower && passwordNumber && passwordSpecial) {

    var characters = 'abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()';
    result += lowercasePool.charAt(Math.floor(Math.random() * lowercasePool.length));
    result += numberPool.charAt(Math.floor(Math.random() * numberPool.length));
    result += specialPool.charAt(Math.floor(Math.random() * specialPool.length));
    function lowerNumberSpecialString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      for (let i = 0; i < length - 3; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    return (lowerNumberSpecialString(passwordLength));
  }

  else if (passwordLower && passwordCapital && passwordSpecial) {

    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY!@#$%^&*()';
    function lowerCapitalNumberSpecialString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      result += lowercasePool.charAt(Math.floor(Math.random() * lowercasePool.length));
      result += capitalPool.charAt(Math.floor(Math.random() * capitalPool.length));
      result += specialPool.charAt(Math.floor(Math.random() * specialPool.length));
      for (let i = 0; i < length - 3; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    return (lowerCapitalNumberSpecialString(passwordLength));
  }

  else if (passwordCapital && passwordNumber && passwordSpecial) {

    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()';
    function capitalNumberSpecialString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      result += capitalPool.charAt(Math.floor(Math.random() * capitalPool.length));
      result += numberPool.charAt(Math.floor(Math.random() * numberPool.length));
      result += specialPool.charAt(Math.floor(Math.random() * specialPool.length));
      for (let i = 0; i < length - 3; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    return (capitalNumberSpecialString(passwordLength));
  }

  else if (passwordCapital && passwordNumber) {

    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    function capitalNumberString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      result += capitalPool.charAt(Math.floor(Math.random() * capitalPool.length));
      result += numberPool.charAt(Math.floor(Math.random() * numberPool.length));
      for (let i = 0; i < length -2; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    return (capitalNumberString(passwordLength));
  }


  else if (passwordLower && passwordCapital) {

    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    function lowerCapitalString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      result += lowercasePool.charAt(Math.floor(Math.random() * lowercasePool.length));
      result += capitalPool.charAt(Math.floor(Math.random() * capitalPool.length));
      for (let i = 0; i < length -2; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    return (lowerCapitalString(passwordLength));
  }

  else if (passwordLower && passwordSpecial) {

    var characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()';
    function lowerSpecialString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      result += lowercasePool.charAt(Math.floor(Math.random() * lowercasePool.length));
      result += specialPool.charAt(Math.floor(Math.random() * specialPool.length));
      for (let i = 0; i < length -2; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    return (lowerSpecialString(passwordLength));
  }

  else if (passwordLower && passwordNumber) {

    var characters = 'abcdefghijklmnopqrstuvwxyz123456789';
    function lowerNumberString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      result += lowercasePool.charAt(Math.floor(Math.random() * lowercasePool.length));
      result += numberPool.charAt(Math.floor(Math.random() * numberPool.length));
      for (let i = 0; i < length -2; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    return (lowerNumberString(passwordLength));
  }

  else if (passwordNumber && passwordSpecial) {

    var characters = '123456789!@#$%^&*()';
    function numberSpecialString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      result += numberPool.charAt(Math.floor(Math.random() * numberPool.length));
      result += specialPool.charAt(Math.floor(Math.random() * specialPool.length));
      for (let i = 0; i < length -2; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    return (lowerCapitalNumberSpecialString(passwordLength));
  }
  else if (passwordNumber) {

    var characters = '123456789';
    function numberString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    return (numberString(passwordLength));
  }

  else if (passwordCapital) {

    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    function capitalString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    return (capitalString(passwordLength));
  }

  else if (passwordSpecial) {

    var characters = '!@#$%^&*()';
    function specialString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    return (specialString(passwordLength));
  }

  else if (passwordLower) {

    var characters = 'abcdefghijklmnopqrstuvwxyz';
    function lowerString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    return (lowerString(passwordLength));
  };
}
//length()


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = randomPassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





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