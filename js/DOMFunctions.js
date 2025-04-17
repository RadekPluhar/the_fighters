import { AttackRegister } from "./AttackRegister.js";
export class DOMFunctions {
    deletingSpacesAfterAttack() {
        this.deletingElement('space', 'attack-result-text');
        this.deletingElement('space', 'attack-result-picture');
        this.deletingElement('space', 'button-space');
        this.createElementWithId('space', 'p', 'picture-space');
        this.createElementWithId('space', 'p', 'button-space');
    }
    creatingSpaceForRivalAttack() {
        this.creatingSpacesForAttacks('rival-attack', AttackRegister.theRivalIsAboutAttack, 'protect-head', 'protect-body', AttackRegister.chooseWhatYouWillProtectHead, AttackRegister.chooseWhatYouWillProtectBody, 'protect-head-button', 'protect-body-button', 'HEAD', 'BODY', 'what-protect', AttackRegister.chooseWhatYouWillProtect, undefined, undefined, undefined, undefined, 'picture-space', 'button-space');
    }
    creatingSpaceForResultOfAttack(underSpace_1, underSpace_2, text, pictureId, picturePath, underSpace_3) {
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
    creatingSpaceForYourAttackWhereToAttackByHand() {
        this.creatingSpacesForAttacks('where-to-attack', AttackRegister.chooseWhereToAttack, 'attack-to-head', 'attack-to-body', AttackRegister.chooseWhereToAttackHead, AttackRegister.chooseWhereToAttackBody, 'attack-to-head-button', 'attack-to-body-button', 'HEAD', 'BODY', undefined, undefined, undefined, undefined, undefined, undefined, 'your-attack', 'hand-or-leg', 'container');
        return 0;
    }
    creatingSpaceForYourAttackWhereToAttackByLeg() {
        this.creatingSpacesForAttacks('where-to-attack', AttackRegister.chooseWhereToAttack, 'attack-to-head', 'attack-to-body', AttackRegister.chooseWhereToAttackHead, AttackRegister.chooseWhereToAttackBody, 'attack-to-head-button', 'attack-to-body-button', 'HEAD', 'BODY', undefined, undefined, 'attack-to-legs', AttackRegister.chooseWhereToAttackLegs, 'attack-to-legs-button', 'LEGS', 'your-attack', 'hand-or-leg', 'container');
        return 1;
    }
    creatingSpacesForAttacks(textingSpaceId_1, text_1, pictureId_1, pictureId_2, picturePath_1, picturePath_2, buttonId_1, buttonId_2, buttonLabel_1, buttonLabel_2, textingSpaceId_2, text_2, pictureId_3, picturePath_3, buttonId_3, buttonLabel_3, underSpace_1, underSpace_2, underSpace_3) {
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
    creatingABoxForContainer(parent, pictureId, picturePath, buttonId, buttonLabel) {
        this.createElementWithId('container', 'div', parent);
        this.createImageElementWithClass(parent, 'img', pictureId, picturePath, 'img-fluid rounded');
        this.createButtonElementWithClass(parent, 'button', buttonId, buttonLabel, 'btn btn-dark');
    }
    createTextNode(text, parent) {
        const letters = document.createTextNode(text);
        const parentElement = document.getElementById(parent);
        parentElement === null || parentElement === void 0 ? void 0 : parentElement.appendChild(letters);
    }
    creatingProgressBar(parentElement, typeOfDiv, firstDivClass, firstDivTextValue, secondDivId, secondDivClass, secondDivRole, secondDivAriaValueNow, secondDivAriaValueMin, secondDivAriaValueMax, secondDivTextValue) {
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
    deletingElement(parentElement, childElement) {
        const parent = document.getElementById(parentElement);
        let child = document.getElementById(childElement);
        parent === null || parent === void 0 ? void 0 : parent.removeChild(child);
    }
    transitionToYouAndRival(idOfPicture, pathToPicture, idOfButton, labelOfButton, pictureThere, buttonThere) {
        var _a, _b;
        (_a = document.getElementById(pictureThere)) === null || _a === void 0 ? void 0 : _a.remove();
        (_b = document.getElementById(buttonThere)) === null || _b === void 0 ? void 0 : _b.remove();
        this.createImageElementWithClass('picture-space', 'img', idOfPicture, pathToPicture, 'img-fluid rounded');
        this.createButtonElementWithClass('button-space', 'button', idOfButton, labelOfButton, 'btn btn-dark');
    }
    createButtonElementWithClass(parentElement, typeOfElement, idOfElement, labelOfButton, classOfButton) {
        const newButton = this.createElementWithId(parentElement, typeOfElement, idOfElement);
        newButton.className = classOfButton;
        const buttonLabel = document.createTextNode(labelOfButton);
        newButton.appendChild(buttonLabel);
        return newButton;
    }
    createImageElementWithClass(parentElement, typeOfElement, idOfElement, srcOfElement, classOfElement) {
        const newElement = this.createElementWithId(parentElement, typeOfElement, idOfElement);
        newElement.src = srcOfElement;
        newElement.className = classOfElement;
        return newElement;
    }
    createElementWithId(parentElement, typeOfElement, idOfElement) {
        const newElement = this.createElement(parentElement, typeOfElement);
        newElement.id = idOfElement;
        return newElement;
    }
    createElement(parentElement, typeOfElement) {
        const superiorElement = document.getElementById(parentElement);
        const newElement = document.createElement(typeOfElement);
        superiorElement === null || superiorElement === void 0 ? void 0 : superiorElement.appendChild(newElement);
        return newElement;
    }
}
