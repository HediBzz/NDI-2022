export class directDamages{
    damages;
    manaCost;
    jouable = false;

    constructor(manaCost,damages){
        this.damages = damages;
        this.manaCost = manaCost;
    }
    get getDamages(){
        return this.damages;
    }
    get getManaCost(){
        return this.manaCost;
    }
    get getJouable(){
        return this.jouable;
    }

    /**
     * @param {any} damages
     */
    set setDamages(damages){
        this.damages = damages;
    }
     /**
     * @param {any} jouable
     */
      set setJouable(jouable){
        this.jouable = jouable;
    }
     /**
     * @param {any} manaCost
     */
     set setManaCost(manaCost){
        this.manaCost = manaCost;
    }

    attaque(enemy){
        if (this.jouable == true){
            enemy.setPv = enemy.getPv - this.damages;
            if (enemy.getPv <= 0){
                console.log("Dead => ",enemy);
            }
        }
        
    }
}