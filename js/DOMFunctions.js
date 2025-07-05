import { AttackRegister } from "./AttackRegister.js";
/**
 * class for creating, deleting and manipulating HTML elements
 */
export class DOMFunctions {
    /**
     * after we see the result of the attack of our fighter or rival and click on the NEXT button, unnecessary elements are removed
     * and in the case of the end of the match, elements are created to draw information and a picture of who won
     */
    deletingSpacesAfterAttack() {
        this.deletingElement('space', 'attack-result-text');
        this.deletingElement('space', 'attack-result-picture');
        this.deletingElement('space', 'button-space');
        this.createElementWithId('space', 'p', 'picture-space');
        this.createElementWithId('space', 'p', 'button-space');
    }
    /**
     * creating elements to choose what I will protect when a rival attacks
     */
    creatingSpaceForRivalAttack() {
        this.creatingSpacesForAttacks('rival-attack', AttackRegister.theRivalIsAboutAttack, 'protect-head', 'protect-body', AttackRegister.chooseWhatYouWillProtectHead, AttackRegister.chooseWhatYouWillProtectBody, 'protect-head-button', 'protect-body-button', 'HEAD', 'BODY', 'what-protect', AttackRegister.chooseWhatYouWillProtect, undefined, undefined, undefined, undefined, 'picture-space', 'button-space');
    }
    /**
     * elements for a result of an attack
     * @param underSpace_1 element we need to delete (No. 1)
     * @param underSpace_2 element we need to delete (No. 2)
     * @param text text of a result of an attack
     * @param pictureId id of an image showing the result of the attack
     * @param picturePath a path to an image showing the result of the attack
     * @param underSpace_3 element we need to delete (No. 3)
     */
    creatingSpaceForResultOfAttack(underSpace_1, underSpace_2, text, pictureId, picturePath, underSpace_3) {
        /**
         * error message
         */
        if (underSpace_1 === undefined || typeof underSpace_1 !== 'string' || underSpace_2 === undefined || typeof underSpace_2 !== 'string'
            || text === undefined || typeof text !== 'string' || pictureId === undefined || typeof pictureId !== 'string'
            || picturePath === undefined || typeof picturePath !== 'string') {
            console.error("function 'creatingSpaceForResultOfAttack': parameters must not be undefined and must be type of string!");
            throw new Error("Invalid input: some parameter is incorrect.");
        }
        this.deletingElement('space', underSpace_1);
        this.deletingElement('space', underSpace_2);
        if (underSpace_3)
            this.deletingElement('space', underSpace_3);
        this.createElementWithId('space', 'h3', 'attack-result-text');
        this.createElementWithId('space', 'p', 'attack-result-picture');
        this.createElementWithId('space', 'p', 'button-space');
        this.createTextNode(text, 'attack-result-text');
        this.createImageElementWithClass('attack-result-picture', 'img', pictureId, picturePath, 'img-fluid rounded');
        this.createButtonElementWithClass('button-space', 'button', 'next-button', 'NEXT', 'btn btn-dark');
    }
    /**
     * creating elements to select where to attack with my hand
     * @returns number 0
     */
    creatingSpaceForYourAttackWhereToAttackByHand() {
        this.creatingSpacesForAttacks('where-to-attack', AttackRegister.chooseWhereToAttack, 'attack-to-head', 'attack-to-body', AttackRegister.chooseWhereToAttackHead, AttackRegister.chooseWhereToAttackBody, 'attack-to-head-button', 'attack-to-body-button', 'HEAD', 'BODY', undefined, undefined, undefined, undefined, undefined, undefined, 'your-attack', 'hand-or-leg', 'container');
        return 0;
    }
    /**
     * creating elements to select where to attack with my leg
     * @returns number 1
     */
    creatingSpaceForYourAttackWhereToAttackByLeg() {
        this.creatingSpacesForAttacks('where-to-attack', AttackRegister.chooseWhereToAttack, 'attack-to-head', 'attack-to-body', AttackRegister.chooseWhereToAttackHead, AttackRegister.chooseWhereToAttackBody, 'attack-to-head-button', 'attack-to-body-button', 'HEAD', 'BODY', undefined, undefined, 'attack-to-legs', AttackRegister.chooseWhereToAttackLegs, 'attack-to-legs-button', 'LEGS', 'your-attack', 'hand-or-leg', 'container');
        return 1;
    }
    /**
     * creating elements that allow the user to defend or attack
     * @param textingSpaceId_1 h3 element id for accompanying text (No. 1)
     * @param text_1 accompanying text (No. 1)
     * @param pictureId_1 id of a picture (No. 1)
     * @param pictureId_2 id of a picture (No. 2)
     * @param picturePath_1 a path to a picture (No. 1)
     * @param picturePath_2 a path to a picture (No. 2)
     * @param buttonId_1 id of a button (No. 1)
     * @param buttonId_2 id of a button (No. 2)
     * @param buttonLabel_1 text on a button (No. 1)
     * @param buttonLabel_2 text on a button (No. 2)
     * @param textingSpaceId_2 h3 element id for accompanying text (No. 2)
     * @param text_2 accompanying text (No. 2)
     * @param pictureId_3 id of a picture (No. 3)
     * @param picturePath_3 a path to a picture (No. 3)
     * @param buttonId_3 id of a button (No. 3)
     * @param buttonLabel_3 text on a button (No. 3)
     * @param underSpace_1 element we need to delete (No. 1)
     * @param underSpace_2 element we need to delete (No. 2)
     * @param underSpace_3 element we need to delete (No. 3)
     */
    creatingSpacesForAttacks(textingSpaceId_1, text_1, pictureId_1, pictureId_2, picturePath_1, picturePath_2, buttonId_1, buttonId_2, buttonLabel_1, buttonLabel_2, textingSpaceId_2, text_2, pictureId_3, picturePath_3, buttonId_3, buttonLabel_3, underSpace_1, underSpace_2, underSpace_3) {
        /**
         * error message
         */
        if (textingSpaceId_1 === undefined || typeof textingSpaceId_1 !== 'string' || text_1 === undefined || typeof text_1 !== 'string'
            || pictureId_1 === undefined || typeof pictureId_1 !== 'string' || pictureId_2 === undefined || typeof pictureId_2 !== 'string'
            || picturePath_1 === undefined || typeof picturePath_1 !== 'string' || picturePath_2 === undefined || typeof picturePath_2 !== 'string'
            || buttonId_1 === undefined || typeof buttonId_1 !== 'string' || buttonId_2 === undefined || typeof buttonId_2 !== 'string'
            || buttonLabel_1 === undefined || typeof buttonLabel_1 !== 'string' || buttonLabel_2 === undefined || typeof buttonLabel_2 !== 'string'
            || textingSpaceId_2 !== undefined && typeof textingSpaceId_2 !== 'string' || text_2 !== undefined && typeof text_2 !== 'string'
            || pictureId_3 !== undefined && typeof pictureId_3 !== 'string' || picturePath_3 !== undefined && typeof picturePath_3 !== 'string'
            || buttonId_3 !== undefined && typeof buttonId_3 !== 'string' || buttonLabel_3 !== undefined && typeof buttonLabel_3 !== 'string'
            || underSpace_1 !== undefined && typeof underSpace_1 !== 'string' || underSpace_2 !== undefined && typeof underSpace_2 !== 'string'
            || underSpace_3 !== undefined && typeof underSpace_3 !== 'string') {
            console.error("function 'creatingSpacesForAttacks': some parameters must not be undefined and all parameters must be type of string!");
            throw new Error("Invalid input: some parameter is incorrect.");
        }
        if (underSpace_1)
            this.deletingElement('space', underSpace_1);
        if (underSpace_2)
            this.deletingElement('space', underSpace_2);
        if (underSpace_3)
            this.deletingElement('space', underSpace_3);
        this.createElementWithId('space', 'h3', textingSpaceId_1);
        if (textingSpaceId_2)
            this.createElementWithId('space', 'h3', textingSpaceId_2);
        this.createElementWithId('space', 'div', 'container');
        this.createTextNode(text_1, textingSpaceId_1);
        if (textingSpaceId_2 && text_2)
            this.createTextNode(text_2, textingSpaceId_2);
        this.creatingABoxForContainer('box1', pictureId_1, picturePath_1, buttonId_1, buttonLabel_1);
        this.creatingABoxForContainer('box2', pictureId_2, picturePath_2, buttonId_2, buttonLabel_2);
        if (pictureId_3 && picturePath_3 && buttonId_3 && buttonLabel_3)
            this.creatingABoxForContainer('box3', pictureId_3, picturePath_3, buttonId_3, buttonLabel_3);
    }
    /**
     * a box for an image and a button where the user chooses what to attack or defend with
     * @param parent a parent element
     * @param pictureId id of a picture
     * @param picturePath a path to a picture
     * @param buttonId id of a button
     * @param buttonLabel text on a button
     */
    creatingABoxForContainer(parent, pictureId, picturePath, buttonId, buttonLabel) {
        /**
         * error message
         */
        if (parent === undefined || typeof parent !== 'string' || pictureId === undefined || typeof pictureId !== 'string'
            || picturePath === undefined || typeof picturePath !== 'string' || buttonId === undefined || typeof buttonId !== 'string'
            || buttonLabel === undefined || typeof buttonLabel !== 'string') {
            console.error("function 'creatingABoxForContainer': parameters must not be undefined and must be type of string!");
            throw new Error("Invalid input: some parameter is incorrect.");
        }
        this.createElementWithId('container', 'div', parent);
        this.createImageElementWithClass(parent, 'img', pictureId, picturePath, 'img-fluid rounded');
        this.createButtonElementWithClass(parent, 'button', buttonId, buttonLabel, 'btn btn-dark');
    }
    /**
     * a comment on the result of the attack
     * @param text text of the comment
     * @param parent parent element for the text
     */
    createTextNode(text, parent) {
        /**
         * error message
         */
        if (text === undefined || typeof text !== 'string' || parent === undefined || typeof parent !== 'string') {
            console.error("function 'createTextNode': parameters must not be undefined and must be type of string!");
            throw new Error("Invalid input: some parameter is incorrect.");
        }
        const letters = document.createTextNode(text);
        const parentElement = document.getElementById(parent);
        parentElement === null || parentElement === void 0 ? void 0 : parentElement.appendChild(letters);
    }
    /**
     * a bar with a charged life for every fighter
     * @param parentElement a parent element
     * @param typeOfDiv a type of HTML element (div)
     * @param firstDivClass a class for first div
     * @param firstDivTextValue the text that appears as the fighter's name (first div)
     * @param secondDivId id of a second div
     * @param secondDivClass a class of a second div
     * @param secondDivRole a role of a second div
     * @param secondDivAriaValueNow current aria value
     * @param secondDivAriaValueMin minimum aria value
     * @param secondDivAriaValueMax maximum aria value
     * @param secondDivTextValue initial value that appears in the life bar (100 %)
     */
    creatingProgressBar(parentElement, typeOfDiv, firstDivClass, firstDivTextValue, secondDivId, secondDivClass, secondDivRole, secondDivAriaValueNow, secondDivAriaValueMin, secondDivAriaValueMax, secondDivTextValue) {
        /**
         * error message
         */
        if (parentElement === undefined || typeof parentElement !== 'string' || typeOfDiv === undefined || typeof typeOfDiv !== 'string'
            || firstDivClass === undefined || typeof firstDivClass !== 'string' || firstDivTextValue === undefined || typeof firstDivTextValue !== 'string'
            || secondDivId === undefined || typeof secondDivId !== 'string' || secondDivClass === undefined || typeof secondDivClass !== 'string'
            || secondDivRole === undefined || typeof secondDivRole !== 'string' || secondDivAriaValueNow === undefined || typeof secondDivAriaValueNow !== 'string'
            || secondDivAriaValueMin === undefined || typeof secondDivAriaValueMin !== 'string'
            || secondDivAriaValueMax === undefined || typeof secondDivAriaValueMax !== 'string'
            || secondDivTextValue === undefined || typeof secondDivTextValue !== 'string') {
            console.error("function 'creatingProgressBar': parameters must not be undefined and must be type of string!");
            throw new Error("Invalid input: some parameter is incorrect.");
        }
        const firstDiv = this.createElement(parentElement, typeOfDiv);
        firstDiv.className = firstDivClass;
        const firstDivText = document.createTextNode(firstDivTextValue);
        firstDiv.appendChild(firstDivText);
        const secondDiv = document.createElement(typeOfDiv);
        secondDiv.id = secondDivId;
        secondDiv.className = secondDivClass;
        secondDiv.role = secondDivRole;
        secondDiv.ariaValueNow = secondDivAriaValueNow;
        secondDiv.ariaValueMin = secondDivAriaValueMin;
        secondDiv.ariaValueMax = secondDivAriaValueMax;
        const secondDivText = document.createTextNode(secondDivTextValue);
        secondDiv.appendChild(secondDivText);
        firstDiv.appendChild(secondDiv);
    }
    /**
     * picture just before the fight (GOOD LUCK)
     */
    transitionToGoodLuck() {
        this.deletingElement('space', 'picture-space');
        this.deletingElement('space', 'button-space');
        this.createElementWithId('space', 'p', 'progress-space');
        this.createElementWithId('space', 'p', 'picture-space');
        this.createElementWithId('space', 'p', 'button-space');
        this.creatingProgressBar('progress-space', 'div', "progress my-1", 'YOU    ', 'youProgressBar', 'progress-bar bg-dark', 'progressbar', '100', '0', '100', '100 %');
        this.creatingProgressBar('progress-space', 'div', "progress my-1", 'RIVAL  ', 'rivalProgressBar', 'progress-bar bg-dark', 'progressbar', '100', '0', '100', '100 %');
        this.createImageElementWithClass('picture-space', 'img', 'good-luck-picture', 'pic/good_luck.jpg', 'img-fluid rounded');
        this.createButtonElementWithClass('button-space', 'button', 'good-luck-button', 'START THE FIGHT', 'btn btn-dark');
    }
    /**
     * deleting HTML element
     * @param parentElement parent element in which the element is deleted
     * @param childElement element to be deleted
     */
    deletingElement(parentElement, childElement) {
        /**
         * error message
         */
        if (parentElement === undefined || typeof parentElement !== 'string' || childElement === undefined || typeof childElement !== 'string') {
            console.error("function 'deletingElement': parameters must not be undefined and must be type of string!");
            throw new Error("Invalid input: some parameter is incorrect.");
        }
        const parent = document.getElementById(parentElement);
        let child = document.getElementById(childElement);
        parent === null || parent === void 0 ? void 0 : parent.removeChild(child);
    }
    /**
     * displaying your warrior and rival
     * @param idOfPicture id of a picture
     * @param pathToPicture a path to the picture
     * @param idOfButton id of a button
     * @param labelOfButton the text that appears on the button
     * @param pictureThere the previous image, which will be deleted
     * @param buttonThere the previous button, which will be deleted
     */
    transitionToYouAndRival(idOfPicture, pathToPicture, idOfButton, labelOfButton, pictureThere, buttonThere) {
        var _a, _b;
        /**
         * error message
         */
        if (idOfPicture === undefined || typeof idOfPicture !== 'string' || pathToPicture === undefined || typeof pathToPicture !== 'string'
            || idOfButton === undefined || typeof idOfButton !== 'string' || labelOfButton === undefined || typeof labelOfButton !== 'string'
            || pictureThere === undefined || typeof pictureThere !== 'string' || buttonThere === undefined || typeof buttonThere !== 'string') {
            console.error("function 'transitionToYouAndRival': parameters must not be undefined and must be type of string!");
            throw new Error("Invalid input: some parameter is incorrect.");
        }
        (_a = document.getElementById(pictureThere)) === null || _a === void 0 ? void 0 : _a.remove();
        (_b = document.getElementById(buttonThere)) === null || _b === void 0 ? void 0 : _b.remove();
        this.createImageElementWithClass('picture-space', 'img', idOfPicture, pathToPicture, 'img-fluid rounded');
        this.createButtonElementWithClass('button-space', 'button', idOfButton, labelOfButton, 'btn btn-dark');
    }
    /**
     * creating HTML button element with class
     * @param parentElement parent element into which the new element is inserted
     * @param typeOfElement type of an element
     * @param idOfElement id of an element
     * @param labelOfButton the text that appears on the button
     * @param classOfButton a class of an element
     * @returns HTML button element
     */
    createButtonElementWithClass(parentElement, typeOfElement, idOfElement, labelOfButton, classOfButton) {
        /**
         * error message
         */
        if (parentElement === undefined || typeOfElement === undefined || typeof parentElement !== 'string' || typeof typeOfElement !== 'string'
            || idOfElement === undefined || typeof idOfElement !== 'string' || labelOfButton === undefined || typeof labelOfButton !== 'string'
            || classOfButton === undefined || typeof classOfButton !== 'string') {
            console.error("function 'createButtonElementWithClass': parameters must not be undefined and must be type of string!");
            throw new Error("Invalid input: some parameter is incorrect.");
        }
        const newButton = this.createElementWithId(parentElement, typeOfElement, idOfElement);
        newButton.className = classOfButton;
        const buttonLabel = document.createTextNode(labelOfButton);
        newButton.appendChild(buttonLabel);
        return newButton;
    }
    /**
     * creating HTML image element with class
     * @param parentElement parent element into which the new element is inserted
     * @param typeOfElement type of an element
     * @param idOfElement id of an element
     * @param srcOfElement the path to the picture
     * @param classOfElement a class of an element
     * @returns HTML image element
     */
    createImageElementWithClass(parentElement, typeOfElement, idOfElement, srcOfElement, classOfElement) {
        /**
         * error message
         */
        if (parentElement === undefined || typeOfElement === undefined || typeof parentElement !== 'string' || typeof typeOfElement !== 'string'
            || idOfElement === undefined || typeof idOfElement !== 'string' || srcOfElement === undefined || typeof srcOfElement !== 'string'
            || classOfElement === undefined || typeof classOfElement !== 'string') {
            console.error("function 'createImageElementWithClass': parameters must not be undefined and must be type of string!");
            throw new Error("Invalid input: some parameter is incorrect.");
        }
        const newElement = this.createElementWithId(parentElement, typeOfElement, idOfElement);
        newElement.src = srcOfElement;
        newElement.className = classOfElement;
        return newElement;
    }
    /**
     * creating HTML element with id
     * @param parentElement parent element into which the new element is inserted
     * @param typeOfElement type of an element
     * @param idOfElement id of an element
     * @returns HTML element
     */
    createElementWithId(parentElement, typeOfElement, idOfElement) {
        /**
         * error message
         */
        if (parentElement === undefined || typeOfElement === undefined || typeof parentElement !== 'string' || typeof typeOfElement !== 'string'
            || idOfElement === undefined || typeof idOfElement !== 'string') {
            console.error("function 'createElementWithId': parameters must not be undefined and must be type of string!");
            throw new Error("Invalid input: some parameter is incorrect.");
        }
        const newElement = this.createElement(parentElement, typeOfElement);
        newElement.id = idOfElement;
        return newElement;
    }
    /**
     * creating HTML element
     * @param parentElement parent element into which the new element is inserted
     * @param typeOfElement type of an element
     * @returns HTML element
     */
    createElement(parentElement, typeOfElement) {
        /**
         * error message
         */
        if (parentElement === undefined || typeOfElement === undefined || typeof parentElement !== 'string' || typeof typeOfElement !== 'string') {
            console.error("function 'createElement': parameters must not be undefined and must be type of string!");
            throw new Error("Invalid input: some parameter is incorrect.");
        }
        const superiorElement = document.getElementById(parentElement);
        const newElement = document.createElement(typeOfElement);
        superiorElement === null || superiorElement === void 0 ? void 0 : superiorElement.appendChild(newElement);
        return newElement;
    }
}
