
var passwordLength= window.prompt("How many total charachters do you want in your password?");
//console.log(passwordNumber);

var passwordLower= window.confirm("Do you want to add a lowercase letter?");
//console.log(passwordlower);

var passwordCapital= window.confirm("Do you want to add a capital letter?");
//console.log(passwordCapital);

var passwordNumber= window.confirm("Do you want to add a number into your passowrd?");
//console.log(passwordNumber);

var passwordSpecial= window.confirm("Do you want to add a special charachter?");
//console.log(passwordSpecial);

if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Please select a number between 8-128 charachters.");
} //reload page???


if (passwordLower && passwordCapital && passwordNumber && passwordSpecial){
  
var characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()';
function lowerCapitalNumberSpecialString(length) {
  let result = ' ';
  var charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
console.log(lowerCapitalNumberSpecialString(passwordLength));
}


if (passwordLower && passwordCapital && passwordNumber){
   
var characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
function lowerCapitalNumberString(length) {
  let result = ' ';
  var charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
console.log(lowerCapitalNumberString(passwordLength));
}


if (passwordLower){
  
var characters ='abcdefghijklmnopqrstuvwxyz';
function lowerString(length) {
  let result = ' ';
  var charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
console.log(lowerString(passwordLength));
}

if (passwordLower && passwordCapital){
  
var characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function lowerCapitalString(length) {
  let result = ' ';
  var charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
console.log(lowerCapitalString(passwordLength));
}

if (passwordLower && passwordSpecial){
  
  var characters ='abcdefghijklmnopqrstuvwxyz!@#$%^&*()';
  function lowerSpecialString(length) {
    let result = ' ';
    var charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  console.log(lowerSpecialString(passwordLength));
  }

  if (passwordLower && passwordNumber){
  
    var characters ='abcdefghijklmnopqrstuvwxyz123456789';
    function lowerNumberString(length) {
      let result = ' ';
      var charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    console.log(lowerNumberString(passwordLength));
    }

    if (passwordLower && passwordNumber && passwordSpecial){
  
      var characters ='abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()';
      function lowerNumberSpecialString(length) {
        let result = ' ';
        var charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }
      console.log(lowerNumberSpecialString(passwordLength));
      }

      if (passwordLower && passwordCapital && passwordSpecial){
  
        var characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY!@#$%^&*()';
        function lowerCapitalNumberSpecialString(length) {
          let result = ' ';
          var charactersLength = characters.length;
          for ( let i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
        }
        console.log(lowerCapitalNumberSpecialString(passwordLength));
        }

        if ( passwordCapital ){
  
          var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          function capitalString(length) {
            let result = ' ';
            var charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
          }
          console.log(capitalString(passwordLength));
          }

          if (passwordCapital && passwordNumber){
  
            var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
            function capitalNumberString(length) {
              let result = ' ';
              var charactersLength = characters.length;
              for ( let i = 0; i < length; i++ ) {
                  result += characters.charAt(Math.floor(Math.random() * charactersLength));
              }
              return result;
            }
            console.log(capitalNumberString(passwordLength));
            }

            if (passwordCapital && passwordNumber && passwordSpecial){
  
              var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()';
              function capitalNumberSpecialString(length) {
                let result = ' ';
                var charactersLength = characters.length;
                for ( let i = 0; i < length; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
              }
              console.log(capitalNumberSpecialString(passwordLength));
              }

              if (passwordNumber){
  
                var characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()';
                function numberString(length) {
                  let result = ' ';
                  var charactersLength = characters.length;
                  for ( let i = 0; i < length; i++ ) {
                      result += characters.charAt(Math.floor(Math.random() * charactersLength));
                  }
                  return result;
                }
                console.log(numberString(passwordLength));
                }

                if (passwordNumber && passwordSpecial){
  
                  var characters ='123456789!@#$%^&*()';
                  function numberSpecialString(length) {
                    let result = ' ';
                    var charactersLength = characters.length;
                    for ( let i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                  }
                  console.log(lowerCapitalNumberSpecialString(passwordLength));
                  }

                  if (passwordSpecial){
  
                    var characters ='!@#$%^&*()';
                    function specialString(length) {
                      let result = ' ';
                      var charactersLength = characters.length;
                      for ( let i = 0; i < length; i++ ) {
                          result += characters.charAt(Math.floor(Math.random() * charactersLength));
                      }
                      return result;
                    }
                    console.log(specialString(passwordLength));
                    }
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