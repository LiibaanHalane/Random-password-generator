// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "password"
  //how many numbers
  var passlength=prompt("how secure on a scale of 8-128?")
  if (passlength > 128 || passlength < 8) {
    alert('invalid length, set to default of 8');
    passlength=8
  }
  console.log(passlength)
  //include lowercase do you wisper?
  var includelow = confirm("Do you whisper? Include lowercase")
  //include uppercase do you shout?
  var includeupp = confirm("Do you shout? Include upper")
  // numbers? are you a numbers guy?
  var includenum = confirm("Are you a numbers guy? include numbers")
  // are you feeling special?
  var special = confirm("Do you feel special? Include special")
  // must answer at least one of latter 4
  if(includelow || includenum || includenum || special){
    console.log(includelow, includenum, includenum, special)
    //generate password function
  }
  // else{
  //   (writePassword)
  // }


  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// just use simplist password for now literally just assign it
// prompt for these choices: length, lowercase, uppercase, numeric, special. 
// the first is a proprety, just ask for it with dot notation
// the latter four must be in arrays of their own