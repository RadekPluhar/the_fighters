import { AttackRegister } from "./AttackRegister.js";
import { FighterAbstract } from "./FighterAbstract.js";
export class FighterYou extends FighterAbstract {
    constructor(name) {
        super(name);
        this.THE_RIVAL_STOPPED_YOUR_PUNCH = AttackRegister.theRivalStoppedYourPunch;
    }
    attackByHand(whereToAttack, success) {
        let resultField = [];
        if (whereToAttack === 0) {
            if (success) {
                resultField = [AttackRegister.youHitYourRivalInTheFace, AttackRegister.youHitYourRivalInTheFacePic];
            }
            else {
                resultField = [this.THE_RIVAL_STOPPED_YOUR_PUNCH, AttackRegister.theRivalStoppedYourPunchFace];
            }
        }
        else {
            if (success) {
                resultField = [AttackRegister.youHitYourRivalInTheAbdomen, AttackRegister.youHitYourRivalInTheAbdomenPic];
            }
            else {
                resultField = [this.THE_RIVAL_STOPPED_YOUR_PUNCH, AttackRegister.theRivalStoppedYourPunchAbdomen];
            }
        }
        return resultField;
    }
    attackByLeg(whereToAttack, success) {
        let resultField = [];
        if (whereToAttack === 0) {
            if (success) {
                resultField = [AttackRegister.youHitYourRivalInTheFace, AttackRegister.youHitYourRivalInTheFaceByFoot];
            }
            else {
                resultField = [this.THE_RIVAL_STOPPED_YOUR_PUNCH, AttackRegister.theRivalStoppedYourPunchFaceByFoot];
            }
        }
        if (whereToAttack === 1) {
            if (success) {
                resultField = [AttackRegister.youHitYourRivalInTheAbdomen, AttackRegister.youHitYourRivalInTheAbdomenByFoot];
            }
            else {
                resultField = [this.THE_RIVAL_STOPPED_YOUR_PUNCH, AttackRegister.theRivalStoppedYourPunchAbdomenByFoot];
            }
        }
        if (whereToAttack === 2) {
            if (success) {
                resultField = [AttackRegister.youHitYourRivalInTheLeg, AttackRegister.youHitYourRivalInTheLegPic];
            }
            else {
                resultField = [this.THE_RIVAL_STOPPED_YOUR_PUNCH, AttackRegister.theRivalStoppedYourPunchLeg];
            }
        }
        return resultField;
    }
    impactOfYourAttack(whatToAttackWith, whereToAttack, success) {
        let resultField = [];
        if (whatToAttackWith === 0) {
            resultField = this.attackByHand(whereToAttack, success);
        }
        else {
            resultField = this.attackByLeg(whereToAttack, success);
        }
        return resultField;
    }
}
