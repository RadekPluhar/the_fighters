import { AttackRegister } from "./AttackRegister.js";
import { FighterAbstract } from "./FighterAbstract.js";

/**
 * the warrior rival control
 */
export class FighterRival extends FighterAbstract {

    /**
     * an array of links to pictures that show you getting punched in the abdomen by your rival's hand
     */
    private youGotPunchedInTheAbdomenByHandPictures: AttackRegister[] = [AttackRegister.youGotPunchedInTheAbdomenPic, AttackRegister.youGotPunchedInTheAbdomenPic1,
    AttackRegister.youGotPunchedInTheAbdomenPic2, AttackRegister.youGotPunchedInTheAbdomenPic3, AttackRegister.youGotPunchedInTheAbdomenPic4];

    /**
     * an array of links to pictures that show you getting punched in the abdomen by your rival's leg
     */
    private youGotPunchedInTheAbdomenByLegPictures: AttackRegister[] = [AttackRegister.youGotPunchedInTheBackByFoot, AttackRegister.youGotPunchedInTheAbdomenByFoot1,
    AttackRegister.youGotPunchedInTheAbdomenByFoot2, AttackRegister.youGotPunchedInTheAbdomenByFoot3, AttackRegister.youGotPunchedInTheAbdomenByFoot4];

    /**
     * an array of links to pictures showing how you stopped a punch to the face by your rival's hand
     */
    private youStoppedAPunchToTheFaceByHandPictures: AttackRegister[] = [AttackRegister.youStoppedAPunchToTheFacePic, AttackRegister.youStoppedAPunchToTheFacePic1,
    AttackRegister.youStoppedAPunchToTheFacePic2, AttackRegister.youStoppedAPunchToTheFacePic3, AttackRegister.youStoppedAPunchToTheFacePic4];

    /**
     * an array of links to pictures showing how you stopped a punch to the face by your rival's leg
     */
    private youStoppedAPunchToTheFaceByLegPictures: AttackRegister[] = [AttackRegister.youStoppedAPunchToTheFaceByFoot, AttackRegister.youStoppedAPunchToTheFaceByFoot1,
    AttackRegister.youStoppedAPunchToTheFaceByFoot2, AttackRegister.youStoppedAPunchToTheFaceByFoot3, AttackRegister.youStoppedAPunchToTheFaceByFoot4];

    /**
     * an array of links to pictures that show you getting punched in the face by your rival's hand
     */
    private youGotPunchedInTheFaceByHandPictures: AttackRegister[] = [AttackRegister.youGotPunchedInTheFacePic, AttackRegister.youGotPunchedInTheFacePic1,
    AttackRegister.youGotPunchedInTheFacePic2, AttackRegister.youGotPunchedInTheFacePic3, AttackRegister.youGotPunchedInTheFacePic4];

    /**
     * an array of links to pictures that show you getting punched in the face by your rival's leg
     */
    private youGotPunchedInTheFaceByLegPictures: AttackRegister[] = [AttackRegister.youGotPunchedInTheFaceByFoot, AttackRegister.youGotPunchedInTheFaceByFoot1,
    AttackRegister.youGotPunchedInTheFaceByFoot2, AttackRegister.youGotPunchedInTheFaceByFoot3, AttackRegister.youGotPunchedInTheFaceByFoot4];

    /**
     * an array of links to pictures showing how you stopped a punch to the abdomen by your rival's hand
     */
    private youStoppedAPunchToTheAbdomenByHandPictures: AttackRegister[] = [AttackRegister.youStoppedAPunchToTheAbdomenPic,
    AttackRegister.youStoppedAPunchToTheAbdomenPic1, AttackRegister.youStoppedAPunchToTheAbdomenPic2, AttackRegister.youStoppedAPunchToTheAbdomenPic3,
    AttackRegister.youStoppedAPunchToTheAbdomenPic4];

    /**
     * an array of links to pictures showing how you stopped a punch to the abdomen by your rival's leg
     */
    private youStoppedAPunchToTheAbdomenByLegPictures: AttackRegister[] = [AttackRegister.youStoppedAPunchToTheAbdomenByFoot,
    AttackRegister.youStoppedAPunchToTheAbdomenByFoot1, AttackRegister.youStoppedAPunchToTheAbdomenByFoot2, AttackRegister.youStoppedAPunchToTheAbdomenByFoot3,
    AttackRegister.youStoppedAPunchToTheAbdomenByFoot4];

    /**
     * constructor for rival's fighter's foundation
     * @param name a name of rival's fighter
     */
    constructor(name: string) {
        super(name);
    }

    /**
     * decides if your rival stops your attack or not
     * @returns true or false
     */
    public yesOrNo(): boolean {
        return Math.random() < 0.5;
    }

    /**
     * rival's attack
     * @param headOrBody you choose whether you want to protect your head or your body
     * @returns a field with two elements: the first is a notification of how the punch landed and the second is a link to the image
     */
    public rivalAttacks(headOrBody: string): string[] {

        /**
        * error message
        */
        if (headOrBody === undefined) {
            console.error("function 'rivalAttacks': a parameter must not be undefined!");
            return [];
        }

        const attack: string[] = this.choiceOfAttack(headOrBody);
        return attack;
    }

    /**
     * the computer randomly selects the rival's attack type for your fighter
     * @param headOrBody you choose whether you want to protect your head or your body
     * @returns a field with two elements: the first is a notification of how the punch landed and the second is a link to the image
     */
    private choiceOfAttack(headOrBody: string): string[] {

        /**
         * error message
         */
        if (headOrBody === undefined) {
            console.error("function 'choiceOfAttack': a parameter must not be undefined!");
            return [];
        }

        let attackNow: string[] = [];
        const choice: number = Math.floor(Math.random() * 4);
        if (headOrBody === 'head') {
            switch (choice) {
                case 0: attackNow = [AttackRegister.youGotPunchedInTheAbdomen, this.theResultOfAnAttack(this.youGotPunchedInTheAbdomenByHandPictures)]; break;
                case 1: attackNow = [AttackRegister.youGotPunched, this.theResultOfAnAttack(this.youGotPunchedInTheAbdomenByLegPictures)]; break;
                case 2: attackNow = [AttackRegister.youStoppedAPunchToTheFace, this.theResultOfAnAttack(this.youStoppedAPunchToTheFaceByHandPictures)]; break;
                case 3: attackNow = [AttackRegister.youStoppedAPunch, this.theResultOfAnAttack(this.youStoppedAPunchToTheFaceByLegPictures)]; break;
            }
        }
        if (headOrBody === 'body') {
            switch (choice) {
                case 0: attackNow = [AttackRegister.youGotPunchedInTheFace, this.theResultOfAnAttack(this.youGotPunchedInTheFaceByHandPictures)]; break;
                case 1: attackNow = [AttackRegister.youGotPunched, this.theResultOfAnAttack(this.youGotPunchedInTheFaceByLegPictures)]; break;
                case 2: attackNow = [AttackRegister.youStoppedAPunchToTheAbdomen, this.theResultOfAnAttack(this.youStoppedAPunchToTheAbdomenByHandPictures)]; break;
                case 3: attackNow = [AttackRegister.youStoppedAPunch, this.theResultOfAnAttack(this.youStoppedAPunchToTheAbdomenByLegPictures)]; break;
            }
        }
        return attackNow;
    }

    /**
     * getter
     * @returns an array of links to pictures that show you getting punched in the abdomen by your rival's hand
     */
    public getYouGotPunchedInTheAbdomenByHandPictures(): AttackRegister[] {
        return this.youGotPunchedInTheAbdomenByHandPictures;
    }

    /**
     * getter
     * @returns an array of links to pictures that show you getting punched in the abdomen by your rival's leg
     */
    public getYouGotPunchedInTheAbdomenByLegPictures(): AttackRegister[] {
        return this.youGotPunchedInTheAbdomenByLegPictures;
    }

    /**
     * getter
     * @returns an array of links to pictures showing how you stopped a punch to the face by your rival's hand
     */
    public getYouStoppedAPunchToTheFaceByHandPictures(): AttackRegister[] {
        return this.youStoppedAPunchToTheFaceByHandPictures;
    }

    /**
     * getter
     * @returns an array of links to pictures showing how you stopped a punch to the face by your rival's leg
     */
    public getYouStoppedAPunchToTheFaceByLegPictures(): AttackRegister[] {
        return this.youStoppedAPunchToTheFaceByLegPictures;
    }

    /**
     * getter
     * @returns an array of links to pictures that show you getting punched in the face by your rival's hand
     */
    public getYouGotPunchedInTheFaceByHandPictures(): AttackRegister[] {
        return this.youGotPunchedInTheFaceByHandPictures;
    }

    /**
     * getter
     * @returns an array of links to pictures that show you getting punched in the face by your rival's leg
     */
    public getYouGotPunchedInTheFaceByLegPictures(): AttackRegister[] {
        return this.youGotPunchedInTheFaceByLegPictures;
    }

    /**
     * getter
     * @returns an array of links to pictures showing how you stopped a punch to the abdomen by your rival's hand
     */
    public getYouStoppedAPunchToTheAbdomenByHandPictures(): AttackRegister[] {
        return this.youStoppedAPunchToTheAbdomenByHandPictures;
    }

    /**
     * getter
     * @returns an array of links to pictures showing how you stopped a punch to the abdomen by your rival's leg
     */
    public getYouStoppedAPunchToTheAbdomenByLegPictures(): AttackRegister[] {
        return this.youStoppedAPunchToTheAbdomenByLegPictures;
    }
}