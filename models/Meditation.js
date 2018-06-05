const meditationData = require("./meditationData");

class Meditation {
  //returns all meditations
  findAll() {
    return meditationData.meditations;
  }

  //returns an array of recommended meditations
  //based on input of emotions
  findByEmotions(emotions) {
    return { x: 1 };
  }
}

module.exports = Meditation;
