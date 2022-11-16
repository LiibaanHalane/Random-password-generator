// Assignment Code
var generateBtn = document.querySelector("#generate");

//Charset
var low = "abcdefghijklmnopqrstuvwxyz"
var upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "0123456789"
var special = "!@#$%^&*_-+="

// Write password to the #password input
function writePassword() {
  var password = ""
  
  //how many numbers
  var passlength=prompt("how secure on a scale of 8-128?")
  if (passlength > 128 || passlength < 8 || isNaN(passlength)) {
    alert('invalid length, set to default of 8');
    passlength=8
  }

  //include lowercase do you wisper?
  var includelow = confirm("Do you whisper? Include lowercase")
  //include uppercase do you shout?
  var includeupp = confirm("Do you shout? Include upper")
  // numbers? are you a numbers guy?
  var includenum = confirm("Are you a numbers guy? Include numbers")
  // are you feeling special?
  var includespecial = confirm("Do you feel special? Include special")
  // must answer at least one of latter 4

  if(includelow || includenum || includenum || includespecial){
    //charset
    var charset=""
    includelow ? (charset += low):"";
    includeupp ? (charset += upp):"";
    includenum ? (charset += num):"";
    includespecial ? (charset += special):"";
    //generate password function
    for (let i = 0; i < passlength; i++) {
      password += charset.charAt(
        Math.floor(Math.random() * charset.length)
      );
    }
  }
   else{
    var password = "Select at minimum one set of characters"
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

