import { AttackRegister } from "./AttackRegister.js";

export class DOMFunctions {

    public deletingSpacesAfterAttack() {
        this.deletingElement('space', 'attack-result-text');
        this.deletingElement('space', 'attack-result-picture');
        this.deletingElement('space', 'button-space');
        this.createElementWithId('space', 'p', 'picture-space');
        this.createElementWithId('space', 'p', 'button-space');
    }

    public creatingSpaceForRivalAttack() {
        this.creatingSpacesForAttacks('rival-attack', AttackRegister.theRivalIsAboutAttack, 'protect-head', 'protect-body', AttackRegister.chooseWhatYouWillProtectHead,
            AttackRegister.chooseWhatYouWillProtectBody, 'protect-head-button', 'protect-body-button', 'HEAD', 'BODY', 'what-protect',
            AttackRegister.chooseWhatYouWillProtect, undefined, undefined, undefined, undefined, 'picture-space', 'button-space');
    }

    public creatingSpaceForResultOfAttack(underSpace_1: string, underSpace_2: string, text: string, pictureId: string, picturePath: string,
        underSpace_3?: string
    ) {
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

    public creatingSpaceForYourAttackWhereToAttackByHand(): number {
        this.creatingSpacesForAttacks('where-to-attack', AttackRegister.chooseWhereToAttack, 'attack-to-head', 'attack-to-body',
            AttackRegister.chooseWhereToAttackHead, AttackRegister.chooseWhereToAttackBody, 'attack-to-head-button', 'attack-to-body-button', 'HEAD', 'BODY',
            undefined, undefined, undefined, undefined, undefined, undefined, 'your-attack', 'hand-or-leg', 'container');
        return 0;
    }

    public creatingSpaceForYourAttackWhereToAttackByLeg(): number {
        this.creatingSpacesForAttacks('where-to-attack', AttackRegister.chooseWhereToAttack, 'attack-to-head', 'attack-to-body',
            AttackRegister.chooseWhereToAttackHead, AttackRegister.chooseWhereToAttackBody, 'attack-to-head-button', 'attack-to-body-button', 'HEAD', 'BODY', undefined,
            undefined, 'attack-to-legs', AttackRegister.chooseWhereToAttackLegs, 'attack-to-legs-button', 'LEGS', 'your-attack', 'hand-or-leg', 'container');
        return 1;
    }

    creatingSpacesForAttacks(textingSpaceId_1: string, text_1: AttackRegister, pictureId_1: string, pictureId_2: string, picturePath_1: AttackRegister,
        picturePath_2: AttackRegister, buttonId_1: string, buttonId_2: string, buttonLabel_1: string, buttonLabel_2: string, textingSpaceId_2?: string,
        text_2?: AttackRegister, pictureId_3?: string, picturePath_3?: AttackRegister, buttonId_3?: string, buttonLabel_3?: string, underSpace_1?: string,
        underSpace_2?: string, underSpace_3?: string): void {
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

    private creatingABoxForContainer(parent: string, pictureId: string, picturePath: string, buttonId: string, buttonLabel: string) {
        this.createElementWithId('container', 'div', parent);
        this.createImageElementWithClass(parent, 'img', pictureId, picturePath, 'img-fluid rounded');
        this.createButtonElementWithClass(parent, 'button', buttonId, buttonLabel, 'btn btn-dark');
    }

    private createTextNode(text: string, parent: string) {
        const letters = document.createTextNode(text);
        const parentElement = document.getElementById(parent);
        parentElement?.appendChild(letters);
    }

    private creatingProgressBar(parentElement: string, typeOfDiv: string, firstDivClass: string, firstDivTextValue: string,
        secondDivId: string, secondDivClass: string, secondDivRole: string, secondDivAriaValueNow: string, secondDivAriaValueMin: string,
        secondDivAriaValueMax: string, secondDivTextValue: string) {
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

    public transitionToGoodLuck() {
        this.deletingElement('space', 'picture-space');
        this.deletingElement('space', 'button-space');
        this.createElementWithId('space', 'p', 'progress-space');
        this.createElementWithId('space', 'p', 'picture-space');
        this.createElementWithId('space', 'p', 'button-space');
        this.creatingProgressBar('progress-space', 'div', "progress my-1", 'YOU    ', 'youProgressBar', 'progress-bar bg-dark', 'progressbar', '100', '0', '100',
            '100 %');
        this.creatingProgressBar('progress-space', 'div', "progress my-1", 'RIVAL  ', 'rivalProgressBar', 'progress-bar bg-dark', 'progressbar', '100', '0', '100',
            '100 %');
        this.createImageElementWithClass('picture-space', 'img', 'good-luck-picture', 'pic/good_luck.jpg', 'img-fluid rounded');
        this.createButtonElementWithClass('button-space', 'button', 'good-luck-button', 'START THE FIGHT', 'btn btn-dark');
    }

    private deletingElement(parentElement: string, childElement: string) {
        const parent = document.getElementById(parentElement);
        let child = document.getElementById(childElement) as Node;
        parent?.removeChild(child);
    }

    public transitionToYouAndRival(idOfPicture: string, pathToPicture: string, idOfButton: string, labelOfButton: string,
        pictureThere: string, buttonThere: string) {
        document.getElementById(pictureThere)?.remove();
        document.getElementById(buttonThere)?.remove();
        this.createImageElementWithClass('picture-space', 'img', idOfPicture, pathToPicture, 'img-fluid rounded');
        this.createButtonElementWithClass('button-space', 'button', idOfButton, labelOfButton, 'btn btn-dark');
    }

    public createButtonElementWithClass(parentElement: string, typeOfElement: string, idOfElement: string, labelOfButton: string,
        classOfButton: string): HTMLButtonElement {
        const newButton = this.createElementWithId(parentElement, typeOfElement, idOfElement) as HTMLButtonElement;
        newButton.className = classOfButton;
        const buttonLabel = document.createTextNode(labelOfButton);
        newButton.appendChild(buttonLabel);
        return newButton;
    }

    public createImageElementWithClass(parentElement: string, typeOfElement: string, idOfElement: string, srcOfElement: string,
        classOfElement: string): HTMLImageElement {
        const newElement = this.createElementWithId(parentElement, typeOfElement, idOfElement) as HTMLImageElement;
        newElement.src = srcOfElement;
        newElement.className = classOfElement;
        return newElement;
    }

    public createElementWithId(parentElement: string, typeOfElement: string, idOfElement: string): HTMLElement {
        const newElement = this.createElement(parentElement, typeOfElement);
        newElement.id = idOfElement;
        return newElement;
    }

    private createElement(parentElement: string, typeOfElement: string): HTMLElement {
        const superiorElement = document.getElementById(parentElement);
        const newElement = document.createElement(typeOfElement);
        superiorElement?.appendChild(newElement);
        return newElement;
    }
}