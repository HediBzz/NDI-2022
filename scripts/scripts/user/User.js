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
        if (this.mana < card.manaCost){
            return 0;
        } 
        card.action(enemy);

      }
      heal(damages){
        this.setPv =  this.getPv + damages;
      }

}

