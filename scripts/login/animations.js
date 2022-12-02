var knight = document.getElementById('knight');
var knightImg = document.getElementById('knight-img');
var PATH = "assets/images/knight/";
var animation = null;
var registerButton = document.getElementById("register");

const moveKnight = () => {
  animation = setInterval(animateKnight, 40);
};


var i = 2;
var posX = 10;
const animateKnight = () => {
    knight.style.display = "block";
    registerButton.setAttribute("disabled", "disabled");
    // La background image de knight est égale à l'image créée
    if (posX > 380){
        clearInterval(animation);
        endAnimation();
        return;
    }
    knight.style.removeProperty("transforme")
    knight.style.transform = 'translateX(' + posX + 'px)';
    knightImg.src = PATH + "walking" + i + '.png';
    i++;
    if (i > 3) {
        i = 1;
    }
    posX+=10;
}

const endAnimation = () => {
    knightImg.src = PATH + "stop.png";
    knightImg.style.cursor = "pointer";
    knight.addEventListener('mouseover', appearInstruction);
    knight.addEventListener('mouseout', disappearInstruction);
    knight.addEventListener('click', emptyUsernameAndEnableButton);
    knight.classList.add('atEnd');
}

var bubble = null;
const appearInstruction = () => {
    bubble = document.createElement('div');
    let bubbleText = document.createElement("p");
    bubbleText.innerHTML = "Gare à toi! La propriété de ce pseudonyme est privée!";
    bubble.appendChild(bubbleText);
    bubble.classList.add('bubble');
    knight.appendChild(bubble);
}

const disappearInstruction = () => {
    bubble.remove()
}

const emptyUsernameAndEnableButton = () => {
    knightImg.removeAttribute("style");
    document.getElementById('username2').value = "";
    registerButton.removeAttribute("disabled");
    knight.style.display = "none";
    knight.removeEventListener('mouseover', appearInstruction);
    knight.removeEventListener('mouseout', disappearInstruction);
    knight.removeEventListener('click', emptyUsernameAndEnableButton);
}

moveKnight();