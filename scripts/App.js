import {User} from "./user/User.js";
import {directDamages} from "./deck/actions/directDamages.js";
import {basicEntity} from "./deck/entities/basicEntity.js";

var user = new User(10,10);
var userOOM = new User(10,1);
var enemy = new User(10,10);
var card = new directDamages(2,2);
var entity = new basicEntity(2,5,3);

console.log("OOM case :");
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
