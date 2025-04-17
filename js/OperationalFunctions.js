import { AttackRegister } from "./AttackRegister.js";
import { DOMFunctions } from "./DOMFunctions.js";
import { FighterRival } from "./FighterRival.js";
import { FighterYou } from "./FighterYou.js";
let domFunctions = new DOMFunctions();
let fighterYou = new FighterYou('YOU');
let fighterRival = new FighterRival('RIVAL');
export class OperationalFunctions {
    combatManagement() {
        if (Math.random() < 0.5) {
            this.yourFight();
        }
        else {
            this.rivalFight();
        }
    }
    yourFight() {
        var _a, _b;
        domFunctions.creatingSpacesForAttacks('your-attack', AttackRegister.youAreAboutToAttack, 'choose-hand', 'choose-leg', AttackRegister.chooseWhatToAttackWithHand, AttackRegister.chooseWhatToAttackWithLeg, 'choose-hand-button', 'choose-leg-button', 'HAND', 'LEG', 'hand-or-leg', AttackRegister.chooseWhatToAttackWith, undefined, undefined, undefined, undefined, 'picture-space', 'button-space');
        (_a = document.getElementById('choose-hand-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            var _a, _b;
            const attackByHand = domFunctions.creatingSpaceForYourAttackWhereToAttackByHand();
            (_a = document.getElementById('attack-to-head-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                const resultOfAttack = fighterYou.impactOfYourAttack(attackByHand, 0, fighterRival.yesOrNo());
                domFunctions.creatingSpaceForResultOfAttack('where-to-attack', 'container', resultOfAttack[0], 'this-rival-face', resultOfAttack[1]);
                this.progressBarLifeYou(1);
                this.progressBarLifeRival(this.formulaForEnergyLoss(resultOfAttack, AttackRegister.theRivalStoppedYourPunchFace, AttackRegister.youHitYourRivalInTheFacePic, 7));
                continuingCombat(this.rivalFight.bind(this));
            });
            (_b = document.getElementById('attack-to-body-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
                const resultOfAttack = fighterYou.impactOfYourAttack(attackByHand, 1, fighterRival.yesOrNo());
                domFunctions.creatingSpaceForResultOfAttack('where-to-attack', 'container', resultOfAttack[0], 'this-rival-body', resultOfAttack[1]);
                this.progressBarLifeYou(1);
                this.progressBarLifeRival(this.formulaForEnergyLoss(resultOfAttack, AttackRegister.theRivalStoppedYourPunchAbdomen, AttackRegister.youHitYourRivalInTheAbdomenPic, 5));
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
                this.progressBarLifeRival(this.formulaForEnergyLoss(resultOfAttack, AttackRegister.theRivalStoppedYourPunchFaceByFoot, AttackRegister.youHitYourRivalInTheFaceByFoot, 10));
                continuingCombat(this.rivalFight.bind(this));
            });
            (_b = document.getElementById('attack-to-body-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
                const resultOfAttack = fighterYou.impactOfYourAttack(attackByLeg, 1, fighterRival.yesOrNo());
                domFunctions.creatingSpaceForResultOfAttack('where-to-attack', 'container', resultOfAttack[0], 'this-rival-body', resultOfAttack[1]);
                this.progressBarLifeYou(2);
                this.progressBarLifeRival(this.formulaForEnergyLoss(resultOfAttack, AttackRegister.theRivalStoppedYourPunchAbdomenByFoot, AttackRegister.youHitYourRivalInTheAbdomenByFoot, 7));
                continuingCombat(this.rivalFight.bind(this));
            });
            (_c = document.getElementById('attack-to-legs-button')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
                const resultOfAttack = fighterYou.impactOfYourAttack(attackByLeg, 2, fighterRival.yesOrNo());
                domFunctions.creatingSpaceForResultOfAttack('where-to-attack', 'container', resultOfAttack[0], 'this-rival-legs', resultOfAttack[1]);
                this.progressBarLifeYou(2);
                this.progressBarLifeRival(this.formulaForEnergyLoss(resultOfAttack, AttackRegister.theRivalStoppedYourPunchLeg, AttackRegister.youHitYourRivalInTheLegPic, 5));
                continuingCombat(this.rivalFight.bind(this));
            });
        });
    }
    rivalFight() {
        var _a, _b;
        domFunctions.creatingSpaceForRivalAttack();
        (_a = document.getElementById('protect-head-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            const resultOfAttack = fighterRival.rivalAttacks('head');
            domFunctions.creatingSpaceForResultOfAttack('rival-attack', 'what-protect', resultOfAttack[0], 'you-face', resultOfAttack[1], 'container');
            let degreeOfFatigue = 1;
            if (resultOfAttack[1] === AttackRegister.youGotPunchedInTheBackByFoot || resultOfAttack[1] === AttackRegister.youStoppedAPunchToTheFaceByFoot)
                degreeOfFatigue = 2;
            this.progressBarLifeRival(degreeOfFatigue);
            continuingCombat(this.yourFight.bind(this));
        });
        (_b = document.getElementById('protect-body-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            const resultOfAttack = fighterRival.rivalAttacks('body');
            domFunctions.creatingSpaceForResultOfAttack('rival-attack', 'what-protect', resultOfAttack[0], 'you-body', resultOfAttack[1], 'container');
            let degreeOfFatigue = 1;
            if (resultOfAttack[1] === AttackRegister.youGotPunchedInTheFaceByFoot || resultOfAttack[1] === AttackRegister.youStoppedAPunchToTheAbdomenByFoot)
                degreeOfFatigue = 2;
            this.progressBarLifeRival(degreeOfFatigue);
            continuingCombat(this.yourFight.bind(this));
        });
    }
    progressBarLifeYou(decrease) {
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
    progressBarLifeRival(decrease) {
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
    formulaForEnergyLoss(resultOfAttack, stoppedAttack, successfulAttack, numberOfLoss) {
        let lossOfEnergy = 0;
        if (resultOfAttack[1] === stoppedAttack) {
            lossOfEnergy = 1;
        }
        else if (resultOfAttack[1] === successfulAttack) {
            lossOfEnergy = numberOfLoss;
        }
        return lossOfEnergy;
    }
}
function continuingCombat(typeOfFight) {
    var _a;
    (_a = document.getElementById('next-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        domFunctions.deletingSpacesAfterAttack();
        typeOfFight();
    });
}
