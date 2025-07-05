import { AttackRegister } from "./AttackRegister.js";
import { FighterAbstract } from "./FighterAbstract.js";
/**
 * the warrior you control
 */
export class FighterYou extends FighterAbstract {
    /**
     * constructor for your fighter's foundation
     * @param name a name of your fighter
     */
    constructor(name) {
        super(name);
        /**
         * text announcing that a rival has stopped your strike
         */
        this.THE_RIVAL_STOPPED_YOUR_PUNCH = AttackRegister.theRivalStoppedYourPunch;
        /**
         * an array of links to pictures showing you punching your rival in the face with your hand
         */
        this.theResultsOfASuccessfulHandToFaceAttack = [AttackRegister.youHitYourRivalInTheFacePic, AttackRegister.youHitYourRivalInTheFacePic1,
            AttackRegister.youHitYourRivalInTheFacePic2, AttackRegister.youHitYourRivalInTheFacePic3, AttackRegister.youHitYourRivalInTheFacePic4];
        /**
         * an array of links to images showing how a rival stopped your punch to the face with your hand
         */
        this.theResultsOfAUnsuccessfulHandToFaceAttack = [AttackRegister.theRivalStoppedYourPunchFace, AttackRegister.theRivalStoppedYourPunchFace1,
            AttackRegister.theRivalStoppedYourPunchFace2, AttackRegister.theRivalStoppedYourPunchFace3, AttackRegister.theRivalStoppedYourPunchFace4];
        /**
         * an array of links to pictures showing you punching your rival in the abdomen with your hand
         */
        this.theResultsOfASuccessfulHandToAbdomenAttack = [AttackRegister.youHitYourRivalInTheAbdomenPic,
            AttackRegister.youHitYourRivalInTheAbdomenPic1, AttackRegister.youHitYourRivalInTheAbdomenPic2, AttackRegister.youHitYourRivalInTheAbdomenPic3,
            AttackRegister.youHitYourRivalInTheAbdomenPic4];
        /**
         * an array of links to images showing how a rival stopped your punch to the abdomen with your hand
         */
        this.theResultsOfAUnsuccessfulHandToAbdomenAttack = [AttackRegister.theRivalStoppedYourPunchAbdomen,
            AttackRegister.theRivalStoppedYourPunchAbdomen1, AttackRegister.theRivalStoppedYourPunchAbdomen2, AttackRegister.theRivalStoppedYourPunchAbdomen3,
            AttackRegister.theRivalStoppedYourPunchAbdomen4];
        /**
         * an array of links to pictures showing you punching your rival in the face with your leg
         */
        this.theResultsOfASuccessfulLegToFaceAttack = [AttackRegister.youHitYourRivalInTheFaceByFoot, AttackRegister.youHitYourRivalInTheFaceByFoot1,
            AttackRegister.youHitYourRivalInTheFaceByFoot2, AttackRegister.youHitYourRivalInTheFaceByFoot3, AttackRegister.youHitYourRivalInTheFaceByFoot4];
        /**
         * an array of links to images showing how a rival stopped your punch to the face with your leg
         */
        this.theResultsOfAUnsuccessfulLegToFaceAttack = [AttackRegister.theRivalStoppedYourPunchFaceByFoot,
            AttackRegister.theRivalStoppedYourPunchFaceByFoot1, AttackRegister.theRivalStoppedYourPunchFaceByFoot2, AttackRegister.theRivalStoppedYourPunchFaceByFoot3,
            AttackRegister.theRivalStoppedYourPunchFaceByFoot4];
        /**
         * an array of links to pictures showing you punching your rival in the abdomen with your leg
         */
        this.theResultsOfASuccessfulLegToAbdomenAttack = [AttackRegister.youHitYourRivalInTheAbdomenByFoot,
            AttackRegister.youHitYourRivalInTheAbdomenByFoot1, AttackRegister.youHitYourRivalInTheAbdomenByFoot2, AttackRegister.youHitYourRivalInTheAbdomenByFoot3,
            AttackRegister.youHitYourRivalInTheAbdomenByFoot4];
        /**
         * an array of links to images showing how a rival stopped your punch to the abdomen with your leg
         */
        this.theResultsOfAUnsuccessfulLegToAbdomenAttack = [AttackRegister.theRivalStoppedYourPunchAbdomenByFoot,
            AttackRegister.theRivalStoppedYourPunchAbdomenByFoot1, AttackRegister.theRivalStoppedYourPunchAbdomenByFoot2,
            AttackRegister.theRivalStoppedYourPunchAbdomenByFoot3, AttackRegister.theRivalStoppedYourPunchAbdomenByFoot4];
        /**
         * an array of links to pictures showing you punching your rival in the leg with your leg
         */
        this.theResultsOfASuccessfulLegToLegsAttack = [AttackRegister.youHitYourRivalInTheLegPic, AttackRegister.youHitYourRivalInTheLegPic1,
            AttackRegister.youHitYourRivalInTheLegPic2, AttackRegister.youHitYourRivalInTheLegPic3, AttackRegister.youHitYourRivalInTheLegPic4];
        /**
         * an array of links to images showing how a rival stopped your punch to the leg with your leg
         */
        this.theResultsOfAUnsuccessfulLegToLegsAttack = [AttackRegister.theRivalStoppedYourPunchLeg, AttackRegister.theRivalStoppedYourPunchLeg1,
            AttackRegister.theRivalStoppedYourPunchLeg2, AttackRegister.theRivalStoppedYourPunchLeg3, AttackRegister.theRivalStoppedYourPunchLeg4];
    }
    /**
     * your attack on your rival with your hand
     * @param whereToAttack you attack the head or the abdomen
     * @param success the computer randomly selects whether the rival has stopped the blow or not
     * @returns a field with two elements: the first is a notification of how the punch landed and the second is a link to the image
     */
    attackByHand(whereToAttack, success) {
        /**
         * error message
         */
        if (whereToAttack === undefined || success === undefined) {
            console.error("function 'attackByHand': parameters must not be undefined!");
            return [];
        }
        let resultField = [];
        if (whereToAttack === 0) {
            if (success) {
                resultField = [AttackRegister.youHitYourRivalInTheFace, this.theResultOfAnAttack(this.theResultsOfASuccessfulHandToFaceAttack)];
            }
            else {
                resultField = [this.THE_RIVAL_STOPPED_YOUR_PUNCH, this.theResultOfAnAttack(this.theResultsOfAUnsuccessfulHandToFaceAttack)];
            }
        }
        else {
            if (success) {
                resultField = [AttackRegister.youHitYourRivalInTheAbdomen, this.theResultOfAnAttack(this.theResultsOfASuccessfulHandToAbdomenAttack)];
            }
            else {
                resultField = [this.THE_RIVAL_STOPPED_YOUR_PUNCH, this.theResultOfAnAttack(this.theResultsOfAUnsuccessfulHandToAbdomenAttack)];
            }
        }
        return resultField;
    }
    /**
     * your attack on your rival with your leg
     * @param whereToAttack you attack the head or the abdomen or the legs
     * @param success the computer randomly selects whether the rival has stopped the blow or not
     * @returns a field with two elements: the first is a notification of how the punch landed and the second is a link to the image
     */
    attackByLeg(whereToAttack, success) {
        /**
         * error message
         */
        if (whereToAttack === undefined || success === undefined) {
            console.error("function 'attackByLeg': parameters must not be undefined!");
            return [];
        }
        let resultField = [];
        if (whereToAttack === 0) {
            if (success) {
                resultField = [AttackRegister.youHitYourRivalInTheFace, this.theResultOfAnAttack(this.theResultsOfASuccessfulLegToFaceAttack)];
            }
            else {
                resultField = [this.THE_RIVAL_STOPPED_YOUR_PUNCH, this.theResultOfAnAttack(this.theResultsOfAUnsuccessfulLegToFaceAttack)];
            }
        }
        if (whereToAttack === 1) {
            if (success) {
                resultField = [AttackRegister.youHitYourRivalInTheAbdomen, this.theResultOfAnAttack(this.theResultsOfASuccessfulLegToAbdomenAttack)];
            }
            else {
                resultField = [this.THE_RIVAL_STOPPED_YOUR_PUNCH, this.theResultOfAnAttack(this.theResultsOfAUnsuccessfulLegToAbdomenAttack)];
            }
        }
        if (whereToAttack === 2) {
            if (success) {
                resultField = [AttackRegister.youHitYourRivalInTheLeg, this.theResultOfAnAttack(this.theResultsOfASuccessfulLegToLegsAttack)];
            }
            else {
                resultField = [this.THE_RIVAL_STOPPED_YOUR_PUNCH, this.theResultOfAnAttack(this.theResultsOfAUnsuccessfulLegToLegsAttack)];
            }
        }
        return resultField;
    }
    /**
     * your attack on your rival
     * @param whatToAttackWith you can attack with your hand or your foot
     * @param whereToAttack you attack the head or the abdomen or the legs
     * @param success the computer randomly selects whether the rival has stopped the blow or not
     * @returns a field with two elements: the first is a notification of how the punch landed and the second is a link to the image
     */
    impactOfYourAttack(whatToAttackWith, whereToAttack, success) {
        /**
         * error message
         */
        if (whatToAttackWith === undefined || whereToAttack === undefined || success === undefined) {
            console.error("function 'impactOfYourAttack': parameters must not be undefined!");
            return [];
        }
        let resultField = [];
        if (whatToAttackWith === 0) {
            resultField = this.attackByHand(whereToAttack, success);
        }
        else {
            resultField = this.attackByLeg(whereToAttack, success);
        }
        return resultField;
    }
    /**
     * getter
     * @returns an array of links to pictures showing you punching your rival in the face with your hand
     */
    getTheResultsOfASuccessfulHandToFaceAttack() {
        return this.theResultsOfASuccessfulHandToFaceAttack;
    }
    /**
     * getter
     * @returns an array of links to images showing how a rival stopped your punch to the face with your hand
     */
    getTheResultsOfAUnsuccessfulHandToFaceAttack() {
        return this.theResultsOfAUnsuccessfulHandToFaceAttack;
    }
    /**
     * getter
     * @returns an array of links to pictures showing you punching your rival in the abdomen with your hand
     */
    getTheResultsOfASuccessfulHandToAbdomenAttack() {
        return this.theResultsOfASuccessfulHandToAbdomenAttack;
    }
    /**
     * getter
     * @returns an array of links to images showing how a rival stopped your punch to the abdomen with your hand
     */
    getTheResultsOfAUnsuccessfulHandToAbdomenAttack() {
        return this.theResultsOfAUnsuccessfulHandToAbdomenAttack;
    }
    /**
     * getter
     * @returns an array of links to pictures showing you punching your rival in the face with your leg
     */
    getTheResultsOfASuccessfulLegToFaceAttack() {
        return this.theResultsOfASuccessfulLegToFaceAttack;
    }
    /**
     * getter
     * @returns an array of links to images showing how a rival stopped your punch to the face with your leg
     */
    getTheResultsOfAUnsuccessfulLegToFaceAttack() {
        return this.theResultsOfAUnsuccessfulLegToFaceAttack;
    }
    /**
     * getter
     * @returns an array of links to pictures showing you punching your rival in the abdomen with your leg
     */
    getTheResultsOfASuccessfulLegToAbdomenAttack() {
        return this.theResultsOfASuccessfulLegToAbdomenAttack;
    }
    /**
     * getter
     * @returns an array of links to images showing how a rival stopped your punch to the abdomen with your leg
     */
    getTheResultsOfAUnsuccessfulLegToAbdomenAttack() {
        return this.theResultsOfAUnsuccessfulLegToAbdomenAttack;
    }
    /**
     * getter
     * @returns an array of links to pictures showing you punching your rival in the leg with your leg
     */
    getTheResultsOfASuccessfulLegToLegsAttack() {
        return this.theResultsOfASuccessfulLegToLegsAttack;
    }
    /**
     * getter
     * @returns an array of links to images showing how a rival stopped your punch to the leg with your leg
     */
    getTheResultsOfAUnsuccessfulLegToLegsAttack() {
        return this.theResultsOfAUnsuccessfulLegToLegsAttack;
    }
}
