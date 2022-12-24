// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(",]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var newPassword = [];


function generatePassword() {

  //  took me hours to figure out to put this empty variable WITHIN the function to allow password to reset on each click :|
  var password = "";

  // variable to prompt users to choose character length
  var passwordChoice = window.prompt("How many characters would you like your password to be??");
  if (passwordChoice < 8 || passwordChoice > 128) {
    window.alert("Please choose between 8 and 128 characters!!");
    return "BETTER LUCK NEXT TIME";
  }
  // giving user a list of possible character choises for their password
  else {
    var lower = window.confirm("Would you like to use lower case letters??");
    var upper = window.confirm("Would you like to use UPPER case letters??");
    var useNumbers = window.confirm("Would you like to use numbers??");
    var special = window.confirm("Would you like to use SPECIAL characters??");
  }
  //  storing the choices into a new variable
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
  // alerting users they must choose at least ONE character type
  else if
    (lower === false && upper === false && useNumbers === false && special === false) {
    window.alert("YOU MUST CHOOSE AT LEAST ONE CHARACTER TYPE")
  }
  // loop to run the length of characters user input in the window prompt 
  for (var i = 0; i < passwordChoice; i++) {
    // storing randomized output into new variable
    var randomPassword = [Math.floor(Math.random() * newPassword.length)];
    // concatenates the user choice characters with randomized index and stores in own variable
    password = password.concat(newPassword[randomPassword])

  }
  // return variable for stored password
  return password;
}


// runs function to start the generating of password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // changes the placeholder text to user output
  passwordText.value = password;
}

// takes control of HTML btn and activates on click 
generateBtn.addEventListener("click", writePassword);