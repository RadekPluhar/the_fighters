import { AttackRegister } from "./AttackRegister.js";
import { FighterAbstract } from "./FighterAbstract.js";

export class FighterRival extends FighterAbstract {

    constructor(name: string) {
        super(name);
    }

    public yesOrNo(): boolean {
        return Math.random() < 0.5;
    }

    public rivalAttacks(headOrBody: string): string[] {
        const attack: string[] = this.choiceOfAttack(headOrBody);
        return attack;
    }

    private choiceOfAttack(headOrBody: string): string[] {
        let attackNow: string[] = [];
        const choice: number = Math.floor(Math.random() * 4);
        if (headOrBody === 'head') {
            switch (choice) {
                case 0: attackNow = [AttackRegister.youGotPunchedInTheAbdomen, AttackRegister.youGotPunchedInTheAbdomenPic]; break;
                case 1: attackNow = [AttackRegister.youGotPunched, AttackRegister.youGotPunchedInTheBackByFoot]; break;
                case 2: attackNow = [AttackRegister.youStoppedAPunchToTheFace, AttackRegister.youStoppedAPunchToTheFacePic]; break;
                case 3: attackNow = [AttackRegister.youStoppedAPunch, AttackRegister.youStoppedAPunchToTheFaceByFoot]; break;
            }
        }
        if (headOrBody === 'body') {
            switch (choice) {
                case 0: attackNow = [AttackRegister.youGotPunchedInTheFace, AttackRegister.youGotPunchedInTheFacePic]; break;
                case 1: attackNow = [AttackRegister.youGotPunched, AttackRegister.youGotPunchedInTheFaceByFoot]; break;
                case 2: attackNow = [AttackRegister.youStoppedAPunchToTheAbdomen, AttackRegister.youStoppedAPunchToTheAbdomenPic]; break;
                case 3: attackNow = [AttackRegister.youStoppedAPunch, AttackRegister.youStoppedAPunchToTheAbdomenByFoot]; break;
            }
        }
        return attackNow;
    }
}