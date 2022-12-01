function visibility(input) {
  // Toggle the visibility of input #password
  if (input == "password") {
    var inputPass = document.getElementById("password");
    var passVisibility = document.getElementById("password-visibility");
    if (inputPass.type === "password") {
      inputPass.type = "text";
      passVisibility.innerHTML = "visibility";
    } else {
      inputPass.type = "password";
      passVisibility.innerHTML = "visibility_off";
    }
  } else if (input == "confirmPassword") {
    var inputConf = document.getElementById("passwordConfirm");
    var passVisibilityConf = document.getElementById(
      "password-confirm-visibility"
    );
    if (inputConf.type === "password") {
      inputConf.type = "text";
      passVisibilityConf.innerHTML = "visibility";
    } else {
      inputConf.type = "password";
      passVisibilityConf.innerHTML = "visibility_off";
    }
  } else if (input == "passwordLogin") {
    var inputPassLogin = document.getElementById("password-login");
    var passVisibilityLogin = document.getElementById(
      "password-visibility-login"
    );
    if (inputPassLogin.type === "password") {
      inputPassLogin.type = "text";
      passVisibilityLogin.innerHTML = "visibility";
    } else {
      inputPassLogin.type = "password";
      passVisibilityLogin.innerHTML = "visibility_off";
    }
  }
}

function ecritPseudo(){
  clearTimeout(timer);
  if (document.getElementsByName("pseudo")[0].value) {
      timer = setTimeout(finiEcrirePseudo, timerFin);
  }
}

function finiEcrirePseudo() {
  pseudoUsed();
}

function pseudoUsed() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://iutdoua-web.univ-lyon1.fr/~p2102056/SAES3/sae-deuxieme-annee/code/index.php?page=insc&pseudo=" + pseudo.value, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          if (xhr.status == 200) {
              if (xhr.responseText.includes("true")) {
                  pseudo.style.backgroundColor = "#ff5967";
                  phraseP.innerHTML="Ce pseudo est déjà utilisé !";
                  verifInsc();
              } else {
                  pseudo.style.backgroundColor = "#abf7b1";
                  phraseP.innerHTML="Ce pseudo est disponible !";
                  verifInsc();
              }
          }
      }
  }
  xhr.send();
  console.log("LETS GO");
}
