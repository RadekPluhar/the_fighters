export class FighterAbstract {
    constructor(name) {
        this.life = 100;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setLife(energyLoss) {
        this.life -= energyLoss;
    }
    getLife() {
        return this.life;
    }
}
