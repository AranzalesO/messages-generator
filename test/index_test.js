const randomMessage = require('../index')
const assert = require('assert')

describe('randomMessage', () => {
    describe('.pickAnIndex', () => {
        it('will not select a number out of 0 and 6', () => {
            // Setup
            const arrayTest = ["This", "is", "a", "random", "message", 1];
            const notExpectedOutput = 7;
            // Exercise
            const randomResult =  randomMessage.pickAnIndex(arrayTest.length);
            // Verify
            assert.notStrictEqual(notExpectedOutput, randomResult);
        })
    });

    describe('.selectCharacter', () => {
        it('will pass if element extracted is included inside the arrayCharacters', () => {
            // Setup
            const arrayCharacters = ['mexican', 'US Citizen', 'costeño', 'chilean', 'argentinian'];
            // Exercise
            const randomIndex =  randomMessage.pickAnIndex(arrayCharacters.length);
            const elementSelected = arrayTest[randomIndex]
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
            const randomIndex =  randomMessage.pickAnIndex(arrayActions.length);
            const elementSelected = arrayTest[randomIndex]
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
            const randomIndex =  randomMessage.pickAnIndex(arrayNouns.length);
            const elementSelected = arrayTest[randomIndex]
            const confirmElement = arrayNouns.includes(elementSelected)
            // Verify
            assert.ok(confirmElement);
        })
    });

    describe('.selectOutcome', () => {
        it('will pass if element extracted is included inside the arrayOutcomes', () => {
            // Setup
            const arrayOutcomes = ['wall', 'sofa', 'burra', 'arepa', 'chair'];
            // Exercise
            const randomIndex =  randomMessage.pickAnIndex(arrayOutcomes.length);
            const elementSelected = arrayTest[randomIndex]
            const confirmElement = arrayOutcomes.includes(elementSelected)
            // Verify
            assert.ok(confirmElement);
        })
    });
})

