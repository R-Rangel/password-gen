const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numericChars = "0123456789".split("");
const specialChars = "!@#$%^&*".split("");

generateBtn.addEventListener("click", function() {
  const length = parseInt(prompt("Enter password length (min. 8 characters):"));
  if (isNaN(length) || length < 8) {
    alert("Invalid length. Password must be at least 8 characters.");
    return;
  }
  const includeLowercase = confirm("Include lowercase characters?");
  const includeUppercase = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecial = confirm("Include special characters?");
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return;
  }

  let charset = [];
  if (includeLowercase) {
    charset = charset.concat(lowercaseChars);
  }
  if (includeUppercase) {
    charset = charset.concat(uppercaseChars);
  }
  if (includeNumeric) {
    charset = charset.concat(numericChars);
  }
  if (includeSpecial) {
    charset = charset.concat(specialChars);
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  passwordText.value = password;
});
