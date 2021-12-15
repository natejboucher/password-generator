// Define Arrays (4 character arrays)
// Uppercase
var upCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Lowercase
var lowCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Numbers
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// Special characters
var specChar = [" ", "!", "'", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

//Generate password function
function generatePassword()  {
  // combined array
  var combinedArray = [];
  //prompt for password length
  var passwordLength = window.prompt("Pick a password length between 8 and 128 characters.");
   //check that password length is correct
  if (passwordLength < 8 || passwordLength > 128) {
     //alert user and return empty password
    alert("Invalid password length.");
    return "";
  }

  // prompt for uppercase
  var upCaseSelected = window.confirm("Include Uppercase Letters?");
  // prompt for lowercase
  var lowCaseSelected = window.confirm("Include Lowercase Letters>");
  // prompt for number

  // prompt for special characters

  // check if lower case is selected
    // concat the lowercase array into combined array
  if (upCaseSelected) {
    combinedArray = combinedArray.concat(upCaseChar);
  }
  // check if upper case is selected
    //concat the uppercase array into combined array

  //check if numbers is selected
    //concat the numbers array into combined array

  //check if special characters is selected
    //concat the special characters into combined array
  
  // check if combined array has characters
    //if so return empty password, alert user they have to select a character type
  if (combinedArray.length === 0) {
    alert("You have to select atleast one type of character.");
    return "";
  }
  //create random password of password length (use for loop)
    //set random password = randomly picked character from combined array repeated for password length characters
  var randomPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomCharacterIndex = Math.floor(Math.random() * combinedArray.length);
    randomPassword += combinedArray[randomCharacterIndex];
  }
  // return random password
  return randomPassword;
}

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
