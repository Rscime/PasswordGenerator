// Assignment Code
let generateBtn = document.querySelector("#generate");
//Define variables
let numbers = ['0','1','2','3','4','5','6','7','8','9'];
let capital = ['A','B','C','D','E','F','G','H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowercase = ['a','b','c','d','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let special = ['!','#','$','%','&','*','@','+','-','_','<','>'];
let passwordOptions = [];
//Function for password criteria prompt
function generatePassword() {
  //Password Length
  let userLength = prompt("How long would you like your password? (Please insert a whole number between 8 and 128)");
  //obtain and verify length
  if (userLength < 8 || userLength  > 128) {
    userLength  = prompt("Your input was invalid, please select a number between 8 and 128 for your password");
  }
    else {
      window.alert("You selected a password length of: " + userLength);
    }
  
  //Add to array containing possible password characters with Y/N confirm statements
 let userCapital = confirm("Can your password have Capital letters?");
 if(userCapital){
  passwordOptions = passwordOptions.concat(capital);
 }

 let userLower = confirm("Can your password have lowercase letters?");
 if(userLower){
  passwordOptions = passwordOptions.concat(lowercase);
 }

 let userNumber = confirm("Can your password have numbers?");
 if(userNumber){
  passwordOptions = passwordOptions.concat(numbers);
 }

 let userSpecial = confirm("Can your password have special characters?");
 if(userSpecial){
  passwordOptions = passwordOptions.concat(special);
  //Check array
  // console.log(passwordOptions);
 }

//Create random password from options above
for(var i=0; i<=userLength; i++){
let passwordCharacters = passwordOptions[Math.floor(Math.random()*passwordOptions.length)];
console.log(passwordCharacters);
}
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();
