function visibility(input, index) {
  // Toggle the visibility of input #password
  if (input == "password") {
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
