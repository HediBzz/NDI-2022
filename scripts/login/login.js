function visibility(input, index) {
  // Toggle the visibility of input #password
  if (input == "password") {
    console.log("Password visibility toggled");
    var inputPass = document.getElementById("password"+index);
    var passVisibility = document.getElementById("password-visibility"+index);
    if (inputPass.type === "password") {
      inputPass.type = "text";
      passVisibility.innerHTML = "visibility";
    } else {
      inputPass.type = "password";
      passVisibility.innerHTML = "visibility_off";
    }
  }
}
