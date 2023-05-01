const messageElements = {
  // Setting up the joke
  selectCharacter() {
    const characters = ['mexican', 'US Citizen', 'costeño', 'chilean', 'cafetero'];
    randomIndex = this.pickAnIndex(characters.length)
    return characters[randomIndex];
  },

  selectAction() {
    const actions = ['eating', 'walking', 'jumping', 'punching', 'grabbing'];
    randomIndex = this.pickAnIndex(actions.length)
    return actions[randomIndex];
  },
  
  selectNoun() {
    const nouns = ['wall', 'sofa', 'burra', 'tower', 'chair'];
    randomIndex = this.pickAnIndex(nouns.length)
    return nouns[randomIndex];
  },
  
  selectOutcome() {
    const outcomes = ['Good work!', 'Please do not do that', 'Definetly a genius', 'Keep going!', 'Congratulations', 'Amazing!'];
    randomIndex = this.pickAnIndex(outcomes.length)
    return outcomes[randomIndex];
  },
  // Randomizing the selections
  pickAnIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
  },
};

// Getting the message
const randomMessage = {
  content: `A ${messageElements.selectCharacter()} is ${messageElements.selectAction()} a ${messageElements.selectNoun()}... ${messageElements.selectOutcome()}`
}

console.log(randomMessage.content);
module.exports = messageElements, randomMessage;