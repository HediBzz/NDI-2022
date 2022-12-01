export class Action {
    damages;

    constructor(damages){
        this.damages = damages;
    }
    get getDamages(){
        return this.damages;
    }
    /**
     * @param {any} damages
     */
    set setDamages(damages){

    }
    action(enemy){
        enemy.setPv = enemy.getPv - this.damages;
    }
}