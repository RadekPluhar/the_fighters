var _a;
import { OperationalFunctions } from "./OperationalFunctions.js";
import { DOMFunctions } from "./DOMFunctions.js";
let operationalFunctions = new OperationalFunctions();
let domFunctions = new DOMFunctions();
domFunctions.createElementWithId('space', 'p', 'picture-space');
domFunctions.createElementWithId('space', 'p', 'button-space');
domFunctions.createImageElementWithClass('picture-space', 'img', 'the-fighters-picture', 'pic/the_fighters.jpg', 'img-fluid rounded');
domFunctions.createButtonElementWithClass('button-space', 'button', 'start-button-introduction', 'START', 'btn btn-dark');
(_a = document.getElementById('start-button-introduction')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    var _a;
    domFunctions.transitionToYouAndRival('this-is-you-picture', 'pic/this_is_you.jpg', 'next-button-this-is-you', 'NEXT', 'the-fighters-picture', 'start-button-introduction');
    (_a = document.getElementById('next-button-this-is-you')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a;
        domFunctions.transitionToYouAndRival('this-is-your-rival-picture', 'pic/this_is_your_rival.jpg', 'next-button-this-is-your-rival', 'NEXT', 'this-is-you-picture', 'next-button-this-is-you');
        (_a = document.getElementById('next-button-this-is-your-rival')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            var _a;
            domFunctions.transitionToGoodLuck();
            operationalFunctions.progressBarLifeYou();
            operationalFunctions.progressBarLifeRival();
            (_a = document.getElementById('good-luck-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                operationalFunctions.combatManagement();
            });
        });
    });
});
