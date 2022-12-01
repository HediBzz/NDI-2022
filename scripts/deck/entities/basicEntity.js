export class basicEntity{
    damages;
    manaCost; 
    pv;
    jouable = false;

    constructor(manaCost,damages,pv){
        this.damages = damages;
        this.manaCost = manaCost;
        this.pv = pv;
    }
    get getDamages(){
        return this.damages;
    }
    get getManaCost(){
        return this.manaCost;
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
     * @param {any} manaCost
     */
     set setManaCost(manaCost){
        this.manaCost = manaCost;
    }
     /**
     * @param {any} jouable
     */
      set setJouable(jouable){
        this.jouable = jouable;
    }
     /**
     * @param {any} pv
     */
      set setPv(pv){
        this.pv = pv;
    }
    onBoard(){
        return this;
    }
    attaque(enemy){
        if (this.jouable == true){
            
            this.setPv = this.getPv - this.damages;
            enemy.setPv = enemy.getPv - this.damages;
            if (enemy.getPv <= 0){
                console.log("Dead => ",enemy);
            }
        }
        
    }
}