// Wipes error field and re-checks validation of all inputs
// dissables button if any check returns false
function validateForm() {
   var valid
   document.getElementById("required-field-error").innerHTML = ""
   document.getElementById("password-mistmatch-error").innerHTML = ""
   document.getElementById("unmet-password-constraints-error").innerHTML = ""
   document.getElementById("invalid-email-error").innerHTML = ""
   valid = validateUsername()
   valid = validateName() && valid
   valid = validateEmail() && valid
   valid = validatePassword() && valid
   valid = validateConfirmPassword() && valid
   if (!valid) {
      document.getElementById("submit-btn").disabled= true
   }
   else {
      document.getElementById("submit-btn").disabled= false
   }
}

// validates username is not emtpy
// returns false if conditions not met
function validateUsername() {
   var username = document.getElementById("username")
   if (username.value === "") {
      var errorField = document.getElementById("required-field-error")
      if (errorField.innerHTML === "") {
         errorField.innerHTML = "Missing required values: username"
      }
      else {
         errorField.innerHTML = errorField.innerHTML + " - username"
      }
      return false
   }
   return true
}

// validates name is not emtpy
// returns false if conditions not met
function validateName() {
   var name = document.getElementById("name")
   if (name.value === "") {
      var errorField = document.getElementById("required-field-error")
      if (errorField.innerHTML === "") {
         errorField.innerHTML = "Missing required values: name"
      }
      else {
         errorField.innerHTML = errorField.innerHTML + " - name"
      }
      return false
   }
   return true
}

// validates email is not emtpy and to correct standards using reg expression
// returns false if conditions not met
function validateEmail() {
   var email = document.getElementById("email")
   var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
   if (email.value === "") {
      var errorField = document.getElementById("required-field-error")
      if (errorField.innerHTML === "") {
         errorField.innerHTML = "Missing required values: email"
      }
      else {
         errorField.innerHTML = errorField.innerHTML + " - email"
      }
      return false
   }
   else if (!(email.value.match(mailFormat))) {
      var errorField = document.getElementById("invalid-email-error")
      errorField.innerHTML = "Invalid email address"
      return false
   }
   return true
}

// validates password is not empty and meets requirements
// returns false if conditions not met
function validatePassword() {
   var password = document.getElementById("password")
   if (password.value === "") {
      var errorField = document.getElementById("required-field-error")
      if (errorField.innerHTML === "") {
         errorField.innerHTML = "Missing required values: password"
      }
      else {
         errorField.innerHTML = errorField.innerHTML + " - password"
      }
      return false
   }
   var passwordVal = password.value
   var errorFlag = false
   var capital = false
   var number = false
   var numberString = "0123456789"
   // checks if string is at least 8 characters long
   if (passwordVal.length < 8) {
      errorFlag = true
   }
   var index = 0
   for (index; index < passwordVal.length; index++) {
      // Checks if string has at least one uppercase letter
      if (passwordVal[index] == passwordVal[index].toUpperCase()) {
         capital = true
      }
      // Checks if string has at least one number
      if (numberString.includes(passwordVal[index])) {
         number = true
      }
   }
   if (!capital || !number) {
      errorFlag = true
   }
   if (errorFlag) {
      errorField = document.getElementById("unmet-password-constraints-error")
      errorField.innerHTML = "Password needs to have at least 8 characters, one capital letter, and one number!"
      return false
   }
   return true
}

// Confirms if password confirmation is not empty and equals password
// returns false if conditions not met
function validateConfirmPassword() {
   var password = document.getElementById("password")
   var passwordConfirm = document.getElementById("password-confirmation")
   if (passwordConfirm.value === "") {
      var errorField = document.getElementById("required-field-error")
      if (errorField.innerHTML === "") {
         errorField.innerHTML = "Missing required values: password confirmation"
      }
      else {
         errorField.innerHTML = errorField.innerHTML + " - password confirmation"
      }
      return false
   }
   else if (passwordConfirm.value !== password.value) {
      var errorField = document.getElementById("password-mistmatch-error")
      errorField.innerHTML = "Passwords mismatch!"
      return false
   }
   return true
}

function submitClick() {
   alert("Thank you for your registration!")
}
