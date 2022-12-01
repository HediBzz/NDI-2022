import {Enemy} from "./scripts/user/Enemy.js";
import {User} from "./scripts/user/User.js";
import {Action} from "./scripts/user/Action.js";

var enemy = new Enemy(10,10);
var user = new User(10,10);

user.playCard(Action,enemy);