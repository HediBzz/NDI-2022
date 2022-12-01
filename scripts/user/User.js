export class User {
    pv;
    mana;
        
    constructor(pv, mana) {
        this.pv = pv;
        this.mana = mana;
      }
    
      get getPv() {
        return this.pv;
      }
      get getMana() {
        return this.mana;
      }
      /**
     * @param {any} pdv
     */
      set setPv(pdv){
        this.pv = pdv;
      }
      /**
     * @param {any} manaPt
     */
      set setMana(manaPt){
        this.mana = manaPt;
      }

      playCard(card,enemy){
        if (card.getManaCost > this.getMana){
            console.log("non");
            card.setJouable = false;
        }else{
            card.setJouable = true;
            this.setMana = this.getMana - card.getManaCost
            enemy.thisPv = enemy.getPv - card.getDamages;
        }
      }

}

