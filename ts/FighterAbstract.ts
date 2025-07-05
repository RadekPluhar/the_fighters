import { AttackRegister } from "./AttackRegister";

/**
 * basic warrior class from which the other warrior types inherit
 */
export abstract class FighterAbstract {

    /**
     * a name of a fighter
     */
    private name: string;

    /**
     * an indicator of how much energy the fighter has left
     */
    private life: number = 100;

    /**
     * constructor for fighter foundation
     * @param name a name of a fighter
     */
    constructor(name: string) {
        this.name = name;
    }

    /**
     * 
     * @returns returns the name of the fighter
     */
    public getName(): string {
        return this.name;
    }

    /**
     * adjusts the fighter's energy downwards
     * @param energyLoss a number that tells how much energy a fighter has lost
     * @returns if the parameter is not filled, the function returns an error message
     */
    public setLife(energyLoss: number): void {

        /**
         * error message
         */
        if (energyLoss === undefined) {
            console.error("function 'setLife': a parameter must not be undefined!");
            return;
        }

        this.life -= energyLoss;
    }

    /**
     * brings the fighter's life back to 100 percent before the start of the new fight
     */
    public setLifeRaw(): void {
        this.life = 100;
    }

    /**
     * 
     * @returns returns the fighter's current energy state
     */
    public getLife(): number {
        return this.life;
    }

    /**
     * randomly selects a picture from a given intervention in the match
     * @param pictures array of links to images of the intervention
     * @returns if the parameter is missing or the field is empty, an error message is printed
     */
    public theResultOfAnAttack(pictures: AttackRegister[]): AttackRegister {

        /**
         * error message
         */
        if (!pictures || pictures.length === 0) {
            console.error("function 'theResultOfAnAttack': pictures array must not be empty!");
            return this.throwError("Invalid input: pictures array is empty.");
        }

        return pictures[Math.floor(Math.random() * pictures.length)];
    }

    /**
     * auxiliary function for catching error messages
     * @param message text of a error message
     */
    throwError(message: string): never {
        throw new Error(message);
    }

}