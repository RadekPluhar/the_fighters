import { AttackRegister } from "./AttackRegister.js";
import { DOMFunctions } from "./DOMFunctions.js";
import { FighterRival } from "./FighterRival.js";
import { FighterYou } from "./FighterYou.js";

let domFunctions: DOMFunctions = new DOMFunctions();
let fighterYou: FighterYou = new FighterYou('YOU');
let fighterRival: FighterRival = new FighterRival('RIVAL');

export class OperationalFunctions {

    public combatManagement(): void {
        if (Math.random() < 0.5) {
            this.yourFight();
        } else {
            this.rivalFight();
        }
    }

    private yourFight(): void {

        domFunctions.creatingSpacesForAttacks('your-attack', AttackRegister.youAreAboutToAttack, 'choose-hand', 'choose-leg', AttackRegister.chooseWhatToAttackWithHand,
            AttackRegister.chooseWhatToAttackWithLeg, 'choose-hand-button', 'choose-leg-button', 'HAND', 'LEG', 'hand-or-leg', AttackRegister.chooseWhatToAttackWith,
            undefined, undefined, undefined, undefined, 'picture-space', 'button-space');
        document.getElementById('choose-hand-button')?.addEventListener('click', () => {
            const attackByHand: number = domFunctions.creatingSpaceForYourAttackWhereToAttackByHand();
            document.getElementById('attack-to-head-button')?.addEventListener('click', () => {
                const resultOfAttack: string[] = fighterYou.impactOfYourAttack(attackByHand, 0, fighterRival.yesOrNo());
                domFunctions.creatingSpaceForResultOfAttack('where-to-attack', 'container', resultOfAttack[0], 'this-rival-face', resultOfAttack[1]);
                this.progressBarLifeYou(1);
                this.progressBarLifeRival(
                    this.formulaForEnergyLoss(resultOfAttack, AttackRegister.theRivalStoppedYourPunchFace, AttackRegister.youHitYourRivalInTheFacePic, 7));
                continuingCombat(this.rivalFight.bind(this));
            });
            document.getElementById('attack-to-body-button')?.addEventListener('click', () => {
                const resultOfAttack: string[] = fighterYou.impactOfYourAttack(attackByHand, 1, fighterRival.yesOrNo());
                domFunctions.creatingSpaceForResultOfAttack('where-to-attack', 'container', resultOfAttack[0], 'this-rival-body', resultOfAttack[1]);
                this.progressBarLifeYou(1);
                this.progressBarLifeRival(
                    this.formulaForEnergyLoss(resultOfAttack, AttackRegister.theRivalStoppedYourPunchAbdomen, AttackRegister.youHitYourRivalInTheAbdomenPic, 5));
                continuingCombat(this.rivalFight.bind(this));
            });
        });
        document.getElementById('choose-leg-button')?.addEventListener('click', () => {
            const attackByLeg: number = domFunctions.creatingSpaceForYourAttackWhereToAttackByLeg();
            document.getElementById('attack-to-head-button')?.addEventListener('click', () => {
                const resultOfAttack: string[] = fighterYou.impactOfYourAttack(attackByLeg, 0, fighterRival.yesOrNo());
                domFunctions.creatingSpaceForResultOfAttack('where-to-attack', 'container', resultOfAttack[0], 'this-rival-face', resultOfAttack[1]);
                this.progressBarLifeYou(2);
                this.progressBarLifeRival(
                    this.formulaForEnergyLoss(resultOfAttack, AttackRegister.theRivalStoppedYourPunchFaceByFoot, AttackRegister.youHitYourRivalInTheFaceByFoot, 10));
                continuingCombat(this.rivalFight.bind(this));
            });
            document.getElementById('attack-to-body-button')?.addEventListener('click', () => {
                const resultOfAttack: string[] = fighterYou.impactOfYourAttack(attackByLeg, 1, fighterRival.yesOrNo());
                domFunctions.creatingSpaceForResultOfAttack('where-to-attack', 'container', resultOfAttack[0], 'this-rival-body', resultOfAttack[1]);
                this.progressBarLifeYou(2);
                this.progressBarLifeRival(
                    this.formulaForEnergyLoss(resultOfAttack, AttackRegister.theRivalStoppedYourPunchAbdomenByFoot, AttackRegister.youHitYourRivalInTheAbdomenByFoot, 7));
                continuingCombat(this.rivalFight.bind(this));
            });
            document.getElementById('attack-to-legs-button')?.addEventListener('click', () => {
                const resultOfAttack: string[] = fighterYou.impactOfYourAttack(attackByLeg, 2, fighterRival.yesOrNo());
                domFunctions.creatingSpaceForResultOfAttack('where-to-attack', 'container', resultOfAttack[0], 'this-rival-legs', resultOfAttack[1]);
                this.progressBarLifeYou(2);
                this.progressBarLifeRival(
                    this.formulaForEnergyLoss(resultOfAttack, AttackRegister.theRivalStoppedYourPunchLeg, AttackRegister.youHitYourRivalInTheLegPic, 5));
                continuingCombat(this.rivalFight.bind(this));
            });
        });
    }

    private rivalFight(): void {
        domFunctions.creatingSpaceForRivalAttack();
        document.getElementById('protect-head-button')?.addEventListener('click', () => {
            const resultOfAttack: string[] = fighterRival.rivalAttacks('head');
            domFunctions.creatingSpaceForResultOfAttack('rival-attack', 'what-protect', resultOfAttack[0], 'you-face', resultOfAttack[1], 'container');
            let degreeOfFatigue: number = 1;
            if (resultOfAttack[1] === AttackRegister.youGotPunchedInTheBackByFoot || resultOfAttack[1] === AttackRegister.youStoppedAPunchToTheFaceByFoot)
                degreeOfFatigue = 2;
            this.progressBarLifeRival(degreeOfFatigue);
            continuingCombat(this.yourFight.bind(this));
        });
        document.getElementById('protect-body-button')?.addEventListener('click', () => {
            const resultOfAttack: string[] = fighterRival.rivalAttacks('body');
            domFunctions.creatingSpaceForResultOfAttack('rival-attack', 'what-protect', resultOfAttack[0], 'you-body', resultOfAttack[1], 'container');
            let degreeOfFatigue: number = 1;
            if (resultOfAttack[1] === AttackRegister.youGotPunchedInTheFaceByFoot || resultOfAttack[1] === AttackRegister.youStoppedAPunchToTheAbdomenByFoot)
                degreeOfFatigue = 2;
            this.progressBarLifeRival(degreeOfFatigue);
            continuingCombat(this.yourFight.bind(this));
        });
    }

    public progressBarLifeYou(decrease?: number) {
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

    public progressBarLifeRival(decrease?: number) {
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

    private formulaForEnergyLoss(resultOfAttack: string[], stoppedAttack: AttackRegister, successfulAttack: AttackRegister, numberOfLoss: number): number {
        let lossOfEnergy: number = 0;
        if (resultOfAttack[1] === stoppedAttack) {
            lossOfEnergy = 1;
        } else if (resultOfAttack[1] === successfulAttack) {
            lossOfEnergy = numberOfLoss;
        }
        return lossOfEnergy;
    }
}

function continuingCombat(typeOfFight: () => void): void {
    document.getElementById('next-button')?.addEventListener('click', () => {
        domFunctions.deletingSpacesAfterAttack();
        typeOfFight();
    });
}