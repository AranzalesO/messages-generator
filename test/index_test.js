const messageElements = require('../index')
const assert = require('assert')

describe('messageElements', () => {
    describe('.pickAnIndex', () => {
        it('will not select a number out of 0 and 6', () => {
            // Setup
            const arrayTest = ["This", "is", "a", "random", "message", 1];
            const notExpectedOutput = 7;
            // Exercise
            const randomResult =  messageElements.pickAnIndex(arrayTest.length);
            // Verify
            assert.notStrictEqual(notExpectedOutput, randomResult);
        })
    });

    describe('.selectCharacter', () => {
        it('will pass if element extracted is included inside the arrayCharacters', () => {
            // Setup
            const arrayCharacters = ['mexican', 'US Citizen', 'costeño', 'chilean', 'argentinian'];
            // Exercise
            const randomIndex =  messageElements.pickAnIndex(arrayCharacters.length);
            const elementSelected = arrayCharacters[randomIndex]
            const confirmElement = arrayCharacters.includes(elementSelected)
            // Verify
            assert.ok(confirmElement);
        })
    });
    
    describe('.selectAction', () => {
        it('will pass if element extracted is included inside the arrayActions', () => {
            // Setup
            const arrayActions = ['eating', 'walking', 'jumping', 'punching', 'grabbing'];
            // Exercise
            const randomIndex =  messageElements.pickAnIndex(arrayActions.length);
            const elementSelected = arrayActions[randomIndex]
            const confirmElement = arrayActions.includes(elementSelected)
            // Verify
            assert.ok(confirmElement);
        })
    });

    describe('.selectNoun', () => {
        it('will pass if element extracted is included inside the arrayNouns', () => {
            // Setup
            const arrayNouns = ['wall', 'sofa', 'burra', 'arepa', 'chair'];
            // Exercise
            const randomIndex =  messageElements.pickAnIndex(arrayNouns.length);
            const elementSelected = arrayNouns[randomIndex]
            const confirmElement = arrayNouns.includes(elementSelected)
            // Verify
            assert.ok(confirmElement);
        })
    });

    describe('.selectOutcome', () => {
        it('will pass if element extracted is included inside the arrayOutcomes', () => {
            // Setup
            const arrayOutcomes = ['Good work!', 'Please do not do that', 'Definetly a genius', 'Keep going!', 'Congratulations'];
            // Exercise
            const randomIndex =  messageElements.pickAnIndex(arrayOutcomes.length);
            const elementSelected = arrayOutcomes[randomIndex]
            const confirmElement = arrayOutcomes.includes(elementSelected)
            // Verify
            assert.ok(confirmElement);
        })
    });
})


