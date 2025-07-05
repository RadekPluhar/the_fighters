/**
 * basic warrior class from which the other warrior types inherit
 */
export class FighterAbstract {
    /**
     * constructor for fighter foundation
     * @param name a name of a fighter
     */
    constructor(name) {
        /**
         * an indicator of how much energy the fighter has left
         */
        this.life = 100;
        this.name = name;
    }
    /**
     *
     * @returns returns the name of the fighter
     */
    getName() {
        return this.name;
    }
    /**
     * adjusts the fighter's energy downwards
     * @param energyLoss a number that tells how much energy a fighter has lost
     * @returns if the parameter is not filled, the function returns an error message
     */
    setLife(energyLoss) {
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
    setLifeRaw() {
        this.life = 100;
    }
    /**
     *
     * @returns returns the fighter's current energy state
     */
    getLife() {
        return this.life;
    }
    /**
     * randomly selects a picture from a given intervention in the match
     * @param pictures array of links to images of the intervention
     * @returns if the parameter is missing or the field is empty, an error message is printed
     */
    theResultOfAnAttack(pictures) {
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
    throwError(message) {
        throw new Error(message);
    }
}
