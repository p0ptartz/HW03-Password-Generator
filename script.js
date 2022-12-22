// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(",]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var newPassword = [];


function generatePassword() {
  newPassword = [];
  var passwordChoice = window.prompt("How many characters would you like your password to be??");
  if (passwordChoice < 8 || passwordChoice > 128) {
    window.alert("Please choose between 8 and 128 characters!!");
    return "BETTER LUCK NEXT TIME";
  }
  else {
    var lower = window.confirm("Would you like to use lower case letters??");
    var upper = window.confirm("Would you like to use UPPER case letters??");
    var useNumbers = window.confirm("Would you like to use numbers??");
    var special = window.confirm("Would you like to use SPECIAL characters??");
  }

  if (lower === true) {
    newPassword = newPassword.concat(lowerCase);
  }
  if (upper === true) {
    newPassword = newPassword.concat(upperCase);
  }
  if (useNumbers === true) {
    newPassword = newPassword.concat(numbers);
  }
  if (special === true) {
    newPassword = newPassword.concat(specialChar);

  }
  else if
    (lower === false && upper === false && useNumbers === false && special === false) {
    window.alert("YOU MUST CHOOSE AT LEAST ONE CHARACTER TYPE")
  }
  console.log(newPassword)
  return ""
}

// return variable for stored password




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
