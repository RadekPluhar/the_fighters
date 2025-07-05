import { OperationalFunctions } from "./OperationalFunctions.js";
import { DOMFunctions } from "./DOMFunctions.js";

/**
 * an object that contains functions for running a duel
 */
let operationalFunctions: OperationalFunctions = new OperationalFunctions();

/**
 * an object that contains functions for working with HTML elements
 */
let domFunctions: DOMFunctions = new DOMFunctions();

theFighters();

/**
 * opening of the game
 */
function theFighters() {
    domFunctions.createElementWithId('space', 'p', 'picture-space');
    domFunctions.createElementWithId('space', 'p', 'button-space');
    domFunctions.createImageElementWithClass('picture-space', 'img', 'the-fighters-picture', 'pic/the_fighters.jpg', 'img-fluid rounded');
    domFunctions.createButtonElementWithClass('button-space', 'button', 'start-button-introduction', 'START', 'btn btn-dark');
    document.getElementById('start-button-introduction')?.addEventListener('click', () => {
        domFunctions.transitionToYouAndRival('this-is-you-picture', 'pic/this_is_you.jpg', 'next-button-this-is-you', 'NEXT',
            'the-fighters-picture', 'start-button-introduction');
        document.getElementById('next-button-this-is-you')?.addEventListener('click', () => {
            domFunctions.transitionToYouAndRival('this-is-your-rival-picture', 'pic/this_is_your_rival.jpg', 'next-button-this-is-your-rival', 'NEXT',
                'this-is-you-picture', 'next-button-this-is-you');
            document.getElementById('next-button-this-is-your-rival')?.addEventListener('click', () => {
                domFunctions.transitionToGoodLuck();
                operationalFunctions.progressBarLifeYou();
                operationalFunctions.progressBarLifeRival();
                document.getElementById('good-luck-button')?.addEventListener('click', () => {
                    operationalFunctions.combatManagement();
                });
            });
        });
    });
}

