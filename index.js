const randomMessage = {
  // Randomizing the selections
  pickAnIndex() {

  },

  // Setting up the joke
  pickCharacter(randomIndex) {
    const characters = ['mexican', 'US Citizen', 'costeño', 'chilean', 'argentinian'];
    return characters[randomIndex];
  }
};

module.exports = randomMessage;