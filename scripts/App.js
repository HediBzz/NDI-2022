


var players = document.querySelectorAll('.hero');
for(var i = 0; i < players.length; i++){
    players[i].style.backgroundImage = 'url(assets/images/' + players[i].getAttribute('value') + ')';
}



var cards = document.querySelectorAll('.card');
var nbMana = 5;
var manaContainer = document.querySelector('.mana');
for(var i = 0; i < nbMana; i++){
    var mana = document.createElement('div');
    mana.classList.add('mana-item');
    manaContainer.appendChild(mana);
}

var attacker;
function checkPlaying() {
    var manaRestant = manaContainer.childElementCount;
    var cards = document.querySelectorAll('.card');
    for (var i=0; i < cards.length; i++) {
        var card = cards[i];
        // Put the src of the background-image in the css
        card.style.backgroundImage = "url(assets/images/" + card.getAttribute('value') + ")";
        if(card.classList.contains('enemy')){
            card.addEventListener('click', function() {
                if(attacker && manaContainer.childElementCount >= parseInt(attacker.querySelector('.card-price').innerHTML)) {
                    damaged(this, attacker);
                    attacker.classList.remove('is-selected');
                    attacker.classList.remove('can-play');
                    var nbManaUsed = parseInt(attacker.querySelector('.card-price').innerHTML);
                    for(var i = 0; i < nbManaUsed; i++){
                        manaContainer.removeChild(manaContainer.firstChild);
                    }
                    checkPlaying();
                    attacker = null;
                }
            });
        } else {
            if (manaRestant >= parseInt(card.querySelector('.card-price').innerHTML)) {
                card.classList.add("can-play");
                card.addEventListener('click', function() {
                    if(this.classList.contains('can-play')){
                        if(attacker != null){
                            attacker.classList.remove('is-selected');
                        }
                        attacker = this;
                        this.classList.add('is-selected');
                    }
                });
            } else {
                card.classList.remove("can-play");
            }
            
        }
    }
    // If no card can be played, end the turn
    if (document.querySelectorAll('.can-play').length == 0) {
        endTurn();
    }
    // If no card friendly, end the game
    if (document.querySelectorAll('.card:not(.enemy)').length == 0) {
        endGame("lose");
    }
    // If no card enemy, end the game
    if (document.querySelectorAll('.card.enemy').length == 0) {
        endGame("win");
    }
}
checkPlaying();

function damaged(selected, attacker){
    if(attacker != null){
        var hp = parseInt(selected.querySelector('.card-HP').innerHTML);
        var atk = parseInt(attacker.querySelector('.card-attack').innerHTML);
        var newHp = hp - atk;
        if(newHp <= 0){
            selected.remove();
        }else{
            selected.querySelector('.card-HP').innerHTML = newHp;
        }
        
    }
}
function endTurn(){
    playIA();
    // Clean the mana-container
    manaContainer.innerHTML = "";
    for(var i = 0; i < nbMana; i++){
        var mana = document.createElement('div');
        mana.classList.add('mana-item');
        manaContainer.appendChild(mana);
    }
    checkPlaying();
    // Retire autant de HP à l'enemi qu'il reste de carte
    var player = document.querySelector('.hero.enemy');
    var hp = parseInt(player.querySelector('.player-HP').innerHTML.split(":")[1]);
    var newHp = hp - document.querySelectorAll('.card.enemy').length;
    document.querySelector('.hero.enemy .player-HP').innerHTML = "HP: " + newHp;
}
function playIA(){
    var cards = document.querySelectorAll('.card.enemy');
    cards.forEach(function(card){
        attacker = card;
        var cards = document.querySelectorAll('.card:not(.enemy)');
        var card = cards[Math.floor(Math.random() * cards.length)];
        if(card != null){
            damaged(card, attacker);
        }
    });
    // Retire autant de pv au joueur qu'il reste de carte ennemie
    var player = document.querySelector('.hero.friend');
    console.log(player);
    var hp = parseInt(player.querySelector('.player-HP').innerHTML.split(":")[1]);
    console.log(hp);
    // Card not enemy
    var newHp = hp - document.querySelectorAll('.card.enemy').length;
    console.log(newHp);
    document.querySelector('.hero.friend .player-HP').innerHTML = "HP: " + newHp;

}

function endGame(state) {
    if(state == "win"){
        alert("You win !");
    }else{
        alert("You lose !");
    }
    location.reload();
}

// Listen for key to check if the Konami Code is entered
var keys = [];
window.addEventListener('keyup', function(e){
    keys.push(e.key);
    keys.splice(-6, keys.length - 5);
    console.log(keys);
    if(keys.join('').includes('upupdowndownleftrightleftrightbastart')){
        konami();
    }
});

function konami(){
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card){
        card.classList.add('enemy');
    });
    checkPlaying();
}