export class Enemy {
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
}

