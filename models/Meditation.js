const meditationData = require("./meditationData");

class Meditation {
  //returns all meditations
  findAll() {
    return meditationData.meditations;
  }
}

module.exports = Meditation;
