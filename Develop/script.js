// Assignment Code
let generateBtn = document.querySelector("#generate");
//Define variables
let numbers = ['0','1','2','3','4','5','6','7','8','9'];
let capital = ['A','B','C','D','E','F','G','H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowercase = ['a','b','c','d','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let special = ['!','#','$','%','&','*','@','+','-','_','<','>'];
//Function for password criteria prompt
function generatePassword() {
  //Password Length
  let userLength = prompt("How long would you like your password? (Please insert a whole number between 8 and 128)");
  //obtain and verify length, Uppper, Lower, Numbers, Special Characters
  if (userLength < 8 || userLength  > 128) {
    userLength  = prompt("Your input was invalid, please select a number between 8 and 128 for your password");
  }
    else {
      window.alert("You selected a password length of: " + userLength);
    }
  
  let userCapital = prompt("Would you like the password to have a capital letter? (enter Y for yes or enter N for no");
  if (userCapital ==! Y || userCapital ==! N){
      userCapital = prompt ("Your input was invalid. If you would like your password to have a capital letter please insert Y, if you would not like your password to have a capital letter please insert N.");
  }
    else{
      window.alert("You selected " + userCapital + "for capital letters");
    }

  let userLower = prompt("Would you like your password to have a lowercase letter? (enter Y for yes or enter N for no");
  if (userLower ==! Y || userLower ==! N){
       userLower = prompt ("Your input was invalid. If you would like your password to have a lowercase letter please insert Y, if you would not like your password to have a lowercase letter please insert N.");
  }
    else{
      window.alert("You selected " + userLower + "for lowercase letters");
    }
  
  let userNumber = prompt("Would you like your password to have a number? (enter Y for yes or enter N for no");
  if (userNumber ==! Y || userNumber ==! N){
      userNumber = prompt ("Your input was invalid. If you would like your password to have a number please insert Y, if you would not like your password to have a number please insert N.");
  }
    else{
      window.alert("You selected " + userNumber + "for numbers");
    }  
      
  let userSpecial = prompt("Would you like your password to have a special character? (enter Y for yes or enter N for no");
  if (userSpecial ==! Y || userSpecial ==! N){
      userSpecial = prompt ("Your input was invalid. If you would like your password to have a special character please insert Y, if you would not like your password to have a special character please insert N.");
  }
    else{
      window.alert("You selected " + userSpecial + "for special characters");  
    }

  }
//Start generating a password based on inputs (length, capital, lowercase, number, special)


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();
