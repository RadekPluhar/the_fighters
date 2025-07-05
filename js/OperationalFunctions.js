import { AttackRegister } from "./AttackRegister.js";
import { DOMFunctions } from "./DOMFunctions.js";
import { FighterRival } from "./FighterRival.js";
import { FighterYou } from "./FighterYou.js";
/**
 * an object that contains functions for working with HTML elements
 */
let domFunctions = new DOMFunctions();
/**
 * an instance of your fighter
 */
let fighterYou = new FighterYou('YOU');
/**
 * an instance of your rival
 */
let fighterRival = new FighterRival('RIVAL');
/**
 * class for combat management
 */
export class OperationalFunctions {
    /**
     * function for combat management - randomly selects who starts
     */
    combatManagement() {
        if (Math.random() < 0.5) {
            this.yourFight();
        }
        else {
            this.rivalFight();
        }
    }
    /**
     * your attack
     */
    yourFight() {
        var _a, _b;
        if (fighterYou.getLife() > 0 && fighterRival.getLife() > 0) {
            domFunctions.creatingSpacesForAttacks('your-attack', AttackRegister.youAreAboutToAttack, 'choose-hand', 'choose-leg', AttackRegister.chooseWhatToAttackWithHand, AttackRegister.chooseWhatToAttackWithLeg, 'choose-hand-button', 'choose-leg-button', 'HAND', 'LEG', 'hand-or-leg', AttackRegister.chooseWhatToAttackWith, undefined, undefined, undefined, undefined, 'picture-space', 'button-space');
            (_a = document.getElementById('choose-hand-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                var _a, _b;
                const attackByHand = domFunctions.creatingSpaceForYourAttackWhereToAttackByHand();
                (_a = document.getElementById('attack-to-head-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                    const resultOfAttack = fighterYou.impactOfYourAttack(attackByHand, 0, fighterRival.yesOrNo());
                    domFunctions.creatingSpaceForResultOfAttack('where-to-attack', 'container', resultOfAttack[0], 'this-rival-face', resultOfAttack[1]);
                    this.progressBarLifeYou(1);
                    this.progressBarLifeRival(this.formulaForEnergyLossRivalWithImageVariants(resultOfAttack, fighterYou.getTheResultsOfAUnsuccessfulHandToFaceAttack(), fighterYou.getTheResultsOfASuccessfulHandToFaceAttack(), 7));
                    continuingCombat(this.rivalFight.bind(this));
                });
                (_b = document.getElementById('attack-to-body-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
                    const resultOfAttack = fighterYou.impactOfYourAttack(attackByHand, 1, fighterRival.yesOrNo());
                    domFunctions.creatingSpaceForResultOfAttack('where-to-attack', 'container', resultOfAttack[0], 'this-rival-body', resultOfAttack[1]);
                    this.progressBarLifeYou(1);
                    this.progressBarLifeRival(this.formulaForEnergyLossRivalWithImageVariants(resultOfAttack, fighterYou.getTheResultsOfAUnsuccessfulHandToAbdomenAttack(), fighterYou.getTheResultsOfASuccessfulHandToAbdomenAttack(), 5));
                    continuingCombat(this.rivalFight.bind(this));
                });
            });
            (_b = document.getElementById('choose-leg-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
                var _a, _b, _c;
                const attackByLeg = domFunctions.creatingSpaceForYourAttackWhereToAttackByLeg();
                (_a = document.getElementById('attack-to-head-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                    const resultOfAttack = fighterYou.impactOfYourAttack(attackByLeg, 0, fighterRival.yesOrNo());
                    domFunctions.creatingSpaceForResultOfAttack('where-to-attack', 'container', resultOfAttack[0], 'this-rival-face', resultOfAttack[1]);
                    this.progressBarLifeYou(2);
                    this.progressBarLifeRival(this.formulaForEnergyLossRivalWithImageVariants(resultOfAttack, fighterYou.getTheResultsOfAUnsuccessfulLegToFaceAttack(), fighterYou.getTheResultsOfASuccessfulLegToFaceAttack(), 10));
                    continuingCombat(this.rivalFight.bind(this));
                });
                (_b = document.getElementById('attack-to-body-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
                    const resultOfAttack = fighterYou.impactOfYourAttack(attackByLeg, 1, fighterRival.yesOrNo());
                    domFunctions.creatingSpaceForResultOfAttack('where-to-attack', 'container', resultOfAttack[0], 'this-rival-body', resultOfAttack[1]);
                    this.progressBarLifeYou(2);
                    this.progressBarLifeRival(this.formulaForEnergyLossRivalWithImageVariants(resultOfAttack, fighterYou.getTheResultsOfAUnsuccessfulLegToAbdomenAttack(), fighterYou.getTheResultsOfASuccessfulLegToAbdomenAttack(), 7));
                    continuingCombat(this.rivalFight.bind(this));
                });
                (_c = document.getElementById('attack-to-legs-button')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
                    const resultOfAttack = fighterYou.impactOfYourAttack(attackByLeg, 2, fighterRival.yesOrNo());
                    domFunctions.creatingSpaceForResultOfAttack('where-to-attack', 'container', resultOfAttack[0], 'this-rival-legs', resultOfAttack[1]);
                    this.progressBarLifeYou(2);
                    this.progressBarLifeRival(this.formulaForEnergyLossRivalWithImageVariants(resultOfAttack, fighterYou.getTheResultsOfAUnsuccessfulLegToLegsAttack(), fighterYou.getTheResultsOfASuccessfulLegToLegsAttack(), 5));
                    continuingCombat(this.rivalFight.bind(this));
                });
            });
        }
        else {
            this.theResultOfTheFight();
        }
    }
    /**
     * your defence
     */
    rivalFight() {
        var _a, _b;
        if (fighterYou.getLife() > 0 && fighterRival.getLife() > 0) {
            domFunctions.creatingSpaceForRivalAttack();
            (_a = document.getElementById('protect-head-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                const resultOfAttack = fighterRival.rivalAttacks('head');
                domFunctions.creatingSpaceForResultOfAttack('rival-attack', 'what-protect', resultOfAttack[0], 'you-face', resultOfAttack[1], 'container');
                let degreeOfFatigue = 1;
                for (const youGotPunchedInTheAbdomenByFoot of fighterRival.getYouGotPunchedInTheAbdomenByLegPictures()) {
                    for (const youStoppedAPunchToTheFaceByFoot of fighterRival.getYouStoppedAPunchToTheFaceByLegPictures()) {
                        if (resultOfAttack[1] === youGotPunchedInTheAbdomenByFoot || resultOfAttack[1] === youStoppedAPunchToTheFaceByFoot)
                            degreeOfFatigue = 2;
                    }
                }
                this.progressBarLifeRival(degreeOfFatigue);
                this.progressBarLifeYou(this.formulaForEnergyLossYouWithImageVariants(resultOfAttack, fighterRival.getYouGotPunchedInTheAbdomenByHandPictures(), 5, fighterRival.getYouGotPunchedInTheAbdomenByLegPictures(), 7, fighterRival.getYouStoppedAPunchToTheFaceByHandPictures(), fighterRival.getYouStoppedAPunchToTheFaceByLegPictures(), 1));
                continuingCombat(this.yourFight.bind(this));
            });
            (_b = document.getElementById('protect-body-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
                const resultOfAttack = fighterRival.rivalAttacks('body');
                domFunctions.creatingSpaceForResultOfAttack('rival-attack', 'what-protect', resultOfAttack[0], 'you-body', resultOfAttack[1], 'container');
                let degreeOfFatigue = 1;
                for (const youGotPunchedInTheFaceByFoot of fighterRival.getYouGotPunchedInTheFaceByLegPictures()) {
                    for (const youStoppedAPunchToTheAbdomenByFoot of fighterRival.getYouStoppedAPunchToTheAbdomenByLegPictures()) {
                        if (resultOfAttack[1] === youGotPunchedInTheFaceByFoot || resultOfAttack[1] === youStoppedAPunchToTheAbdomenByFoot)
                            degreeOfFatigue = 2;
                    }
                }
                this.progressBarLifeRival(degreeOfFatigue);
                this.progressBarLifeYou(this.formulaForEnergyLossYouWithImageVariants(resultOfAttack, fighterRival.getYouGotPunchedInTheFaceByHandPictures(), 7, fighterRival.getYouGotPunchedInTheFaceByLegPictures(), 10, fighterRival.getYouStoppedAPunchToTheAbdomenByHandPictures(), fighterRival.getYouStoppedAPunchToTheAbdomenByLegPictures(), 1));
                continuingCombat(this.yourFight.bind(this));
            });
        }
        else {
            this.theResultOfTheFight();
        }
    }
    /**
     * rendering the result of the fight and buttons to start a new fight
     */
    theResultOfTheFight() {
        var _a;
        let whoIsAWinner;
        if (fighterYou.getLife() > fighterRival.getLife()) {
            whoIsAWinner = AttackRegister.youAreAWinner;
        }
        else if (fighterYou.getLife() < fighterRival.getLife()) {
            whoIsAWinner = AttackRegister.rivalIsAWinner;
        }
        else {
            whoIsAWinner = AttackRegister.nobodyIsAWinner;
        }
        domFunctions.createImageElementWithClass('picture-space', 'img', 'the-fighters-picture-final', whoIsAWinner, 'img-fluid rounded');
        domFunctions.createButtonElementWithClass('button-space', 'button', 'start-again-button', 'START A NEW FIGHT', 'btn btn-dark');
        (_a = document.getElementById('start-again-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            fighterYou.setLifeRaw();
            fighterRival.setLifeRaw();
            this.progressBarCharging('youProgressBar', fighterYou);
            this.progressBarCharging('rivalProgressBar', fighterRival);
            this.combatManagement();
        });
    }
    /**
     * shows the recharged life of the warrior when starting a new fight
     * @param progressBar id of a progressbar
     * @param fighter your fighter or your rival
     * @returns if one of the parameters is missing, an error message is displayed
     */
    progressBarCharging(progressBar, fighter) {
        /**
         * error message
         */
        if (progressBar === undefined || fighter === undefined) {
            console.error("function 'progressBarCharging': parameters must not be undefined!");
            return;
        }
        const progressBarElement = document.getElementById(progressBar);
        if (progressBarElement) {
            progressBarElement.style.width = `${fighter.getLife()}%`;
            progressBarElement.textContent = `${fighter.getLife()} %`;
            progressBarElement.setAttribute('aria-valuenow', fighter.getLife().toString());
        }
    }
    /**
     * reduces energy by strike and displays your fighter's current life status
     * @param decrease a number that determines by how much percent your fighter's energy is reduced
     * @returns if the parameter is missing, an error message is displayed
     */
    progressBarLifeYou(decrease) {
        /**
         * error message
         */
        if (decrease !== undefined && typeof decrease !== 'number') {
            console.error("function 'progressBarLifeYou': The parameter must be of type 'number'.");
            return;
        }
        const progressBar = document.getElementById('youProgressBar');
        if (decrease) {
            fighterYou.setLife(decrease);
        }
        if (progressBar) {
            progressBar.style.width = `${fighterYou.getLife()}%`;
            progressBar.textContent = `${fighterYou.getLife()} %`;
            progressBar.setAttribute('aria-valuenow', fighterYou.getLife().toString());
        }
    }
    /**
     * reduces energy by strike and displays your rival's current life status
     * @param decrease a number that determines by how much percent your rival's energy is reduced
     * @returns if the parameter is missing, an error message is displayed
     */
    progressBarLifeRival(decrease) {
        /**
         * error message
         */
        if (decrease !== undefined && typeof decrease !== 'number') {
            console.error("function 'progressBarLifeRival': The parameter must be of type 'number'.");
            return;
        }
        const progressBar = document.getElementById('rivalProgressBar');
        if (decrease) {
            fighterRival.setLife(decrease);
        }
        if (progressBar) {
            progressBar.style.width = `${fighterRival.getLife()}%`;
            progressBar.textContent = `${fighterRival.getLife()} %`;
            progressBar.setAttribute('aria-valuenow', fighterRival.getLife().toString());
        }
    }
    /**
     * depending on the type of attack and the effectiveness of the defense, calculates the percentage of life lost by the rival
     * @param resultOfAttack an array that has two elements: 1. text that describes the result of the attack and 2. text that is the path to the image
     * @param stoppedAttacks an array that contains the paths to the images of a given unsuccessful attack on a rival
     * @param successfulAttacks an array that contains the paths to the images of a given successful attack on a rival
     * @param numberOfLoss a number that determines what percentage of the rival's life has been lost
     * @returns the number by which the rival's life is reduced - it depends on whether the attack was successful or not
     */
    formulaForEnergyLossRivalWithImageVariants(resultOfAttack, stoppedAttacks, successfulAttacks, numberOfLoss) {
        /**
         * error message
         */
        if (!resultOfAttack || resultOfAttack.length === 0 || !stoppedAttacks || stoppedAttacks.length === 0 || !successfulAttacks || successfulAttacks.length === 0
            || numberOfLoss === undefined || typeof numberOfLoss !== 'number') {
            console.error("function 'formulaForEnergyLossRivalWithImageVariants': arrays must not be empty and the last parameter must be type of number!");
            return fighterYou.throwError("Invalid input: some parameter is incorrect.");
        }
        let lossOfEnergy = 0;
        for (const stoppedAttack of stoppedAttacks) {
            if (resultOfAttack[1] === stoppedAttack) {
                lossOfEnergy = 1;
            }
        }
        for (const successfulAttack of successfulAttacks) {
            if (resultOfAttack[1] === successfulAttack) {
                lossOfEnergy = numberOfLoss;
            }
        }
        return lossOfEnergy;
    }
    /**
     * depending on the type of attack and the effectiveness of the defense, calculates the percentage of life lost by the your fighter
     * @param resultOfAttack an array that has two elements: 1. text that describes the result of the attack and 2. text that is the path to the image
     * @param gotPunchedByHand an array of links to pictures of when your fighter got hit by a hand
     * @param gotPunchedByHandNumber the number by which your fighter's life is reduced if your opponent's hand attack is successful
     * @param gotPunchedByLeg an array of links to pictures of when your fighter got hit by a leg
     * @param gotPunchedByLegNumber the number by which your fighter's life is reduced if your opponent's leg attack is successful
     * @param stoppedPunchByHand an array of links to pictures of when your fighter stopped a punch with a rival's hand
     * @param stoppedPunchByLeg an array of links to pictures of when your fighter stopped a punch with a rival's leg
     * @param stoppedPunchNumber the number by which your warrior's life is reduced if you stopped a rival's attack
     * @returns the number by which your fighter's life is reduced - it depends on whether the attack was successful or not
     */
    formulaForEnergyLossYouWithImageVariants(resultOfAttack, gotPunchedByHand, gotPunchedByHandNumber, gotPunchedByLeg, gotPunchedByLegNumber, stoppedPunchByHand, stoppedPunchByLeg, stoppedPunchNumber) {
        /**
         * error message
         */
        if (!resultOfAttack || resultOfAttack.length === 0 || !gotPunchedByHand || gotPunchedByHand.length === 0 || !gotPunchedByLeg || gotPunchedByLeg.length === 0
            || !stoppedPunchByHand || stoppedPunchByHand.length === 0 || !stoppedPunchByLeg || stoppedPunchByLeg.length === 0
            || gotPunchedByHandNumber === undefined || typeof gotPunchedByHandNumber !== 'number' || gotPunchedByLegNumber === undefined
            || typeof gotPunchedByLegNumber !== 'number' || stoppedPunchNumber === undefined || typeof stoppedPunchNumber !== 'number') {
            console.error("function 'formulaForEnergyLossYouWithImageVariants': arrays must not be empty and the others parameters are numbers!");
            return fighterYou.throwError("Invalid input: some parameter is incorrect.");
        }
        let lossOfEnergy = 0;
        for (const gotPunched of gotPunchedByHand) {
            if (resultOfAttack[1] === gotPunched) {
                lossOfEnergy = gotPunchedByHandNumber;
            }
        }
        for (const gotPunched of gotPunchedByLeg) {
            if (resultOfAttack[1] === gotPunched) {
                lossOfEnergy = gotPunchedByLegNumber;
            }
        }
        for (const stoppedHand of stoppedPunchByHand) {
            for (const stoppedLeg of stoppedPunchByLeg) {
                if (resultOfAttack[1] === stoppedHand || resultOfAttack[1] === stoppedLeg) {
                    lossOfEnergy = stoppedPunchNumber;
                }
            }
        }
        return lossOfEnergy;
    }
}
/**
 * basically switches between the rival's attack and your fighter's attack in a regular rotation whenever
 * the NEXT button is clicked after the result of the previous attack
 * @param typeOfFight function for attacking a rival or defending against a rival's attack
 * @returns if the parameters is missing, an error message is displayed
 */
function continuingCombat(typeOfFight) {
    var _a;
    /**
     * error message
     */
    if (typeOfFight === undefined) {
        console.error("function 'continuingCombat': the parameter must not be undefined!");
        return;
    }
    (_a = document.getElementById('next-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        domFunctions.deletingSpacesAfterAttack();
        typeOfFight();
    });
}
