  if(passwordLength < 8){
      alert('Password length must be at least 8 characters');
    }
    

  var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  var hasLower = confirm("Click OK to confirm including Lower characters.");
  var hasUpper = confirm("Click OK to confirm including Upper characters.");
  var hasSpecial = confirm("Click OK to confirm including Special characters.");

  if(hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false){
      alert('Must select at least one character type');
  }

  var userPassword = {
   length: passwordLength,
   hasNumeric: hasNumeric,
   hasLower: hasLower,
   hasUpper: hasUpper,
   hasSpecial: hasSpecial,
   return: userPassword,}

  
  var userOptions = getOptions();
  var possibleChars = [];
  var result = [];
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if(userOptions.hasNumeric === true){
  possibleChars = possibleChars.concat(numericCharacters);
  }
  

 generateBtn.addEventListener("click", writePassword);
