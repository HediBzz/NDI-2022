import {User} from "./user/User.js";
import {directDamages} from "./deck/actions/directDamages.js";
import {basicEntity} from "./deck/entities/basicEntity.js";

var user = new User(10,10);
var userOOM = new User(10,1);
var enemy = new User(10,10);
var card = new directDamages(2,2);
var entity = new basicEntity(2,5,3);
var cards = document.querySelectorAll('.card');

/* console.log("OOM case :");
console.log("E mana : ",enemy.getMana,"E pv : ",enemy.getPv,"U mana : ",userOOM.getMana,"U pv : ",userOOM.getPv);
userOOM.playCard(card,enemy);
card.attaque(enemy);
console.log("E mana : ",enemy.getMana,"E pv : ",enemy.getPv,"U mana : ",userOOM.getMana,"U pv : ",userOOM.getPv);

console.log("Normal case direct damage:");
console.log("E mana : ",enemy.getMana,"E pv : ",enemy.getPv,"U mana : ",user.getMana,"U pv : ",user.getPv);
user.playCard(card,enemy);
card.attaque(enemy);
console.log("E mana : ",enemy.getMana,"E pv : ",enemy.getPv,"U mana : ",user.getMana,"U pv : ",user.getPv);
user.setPv = 10;
user.setMana = 10;
enemy.setMana = 10;
enemy.setPv = 10;
console.log("Normal case basic entity:");
console.log("E mana : ",enemy.getMana,"E pv : ",enemy.getPv,"U mana : ",user.getMana,"U pv : ",user.getPv);
user.playCard(entity,enemy);
entity.attaque(enemy);
console.log("E mana : ",enemy.getMana,"E pv : ",enemy.getPv,"U mana : ",user.getMana,"U pv : ",user.getPv);

user.setPv = 10;
user.setMana = 10;
enemy.setMana = 10;
enemy.setPv = 1;
console.log("Kill:");
console.log("E mana : ",enemy.getMana,"E pv : ",enemy.getPv,"U mana : ",user.getMana,"U pv : ",user.getPv);
user.playCard(entity,enemy);
entity.attaque(enemy);
console.log("E mana : ",enemy.getMana,"E pv : ",enemy.getPv,"U mana : ",user.getMana,"U pv : ",user.getPv);
 */

var attacker;
for (var i=0; i<cards.length; i++){ 
    
    var card = document.querySelector('#card'+i);
    // Put the src of the background-image in the css
    card.style.backgroundImage = "url(assets/images/" + card.getAttribute('value') + ")";
    if(card.classList.contains('enemy')){
        card.addEventListener('click', function(){
            damaged(this, attacker);
            attacker = null;
        });
    }else{
        card.addEventListener('click', function(){
            if(this.classList.contains('can-play')){
                if(attacker != null){
                    attacker.classList.remove('is-selected');
                }
                attacker = this;
                this.classList.add('is-selected');
            }
        });
    }
}

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
        attacker.classList.remove('is-selected');
        attacker.classList.remove('can-play');
    }
}