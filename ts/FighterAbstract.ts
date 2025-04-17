export abstract class FighterAbstract {
    private name: string;
    private life: number = 100;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setLife(energyLoss: number): void {
        this.life -= energyLoss;
    }

    public getLife(): number {
        return this.life;
    }
}