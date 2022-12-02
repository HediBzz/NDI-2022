var knight = document.getElementById('knight');
var knightImg = document.querySelector('#knight img');
var PATH = "assets/images/knight/";
var animation = null;

const moveKnight = () => {
  knight.style.transform = 'translateX(385px)'
  animation = setInterval(animateKnight, 100);
  setTimeout(endAnimation, 4000);
};


var i = 2;
const animateKnight = () => {
    // La background image de knight est égale à l'image créée
    knightImg.src = PATH + "walking" + i + '.png';
    i++;
    if (i > 3) {
        i = 1;
    }
}

const endAnimation = () => {
    clearInterval(animation);
    knightImg.src = PATH + "stop.png";
    knight.classList.add('atEnd');
    knight.addEventListener('mouseover', appearInstruction);
    knight.addEventListener('mouseout', disappearInstruction);
}

moveKnight();

var bubble = null;
const appearInstruction = () => {
    bubble = document.createElement('div');
    let bubbleText = document.createElement("p");
    bubbleText.innerHTML = "Garde à toi! La propriété de ce pseudonyme est privée!";
    bubble.appendChild(bubbleText);
    bubble.classList.add('bubble');
    knight.appendChild(bubble);
}

const disappearInstruction = () => {
    bubble.remove()
}
