import {Enemy} from "./scripts/user/Enemy.js";
import {User} from "./scripts/user/User.js";

var enemy = new Enemy(10,10);
var user = new User();

console.log(enemy.getPv);
enemy.setPv = 20;
console.log(enemy.getPv);


