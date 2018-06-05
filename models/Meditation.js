const meditationData = require("./meditationData");

class Meditation {
  //returns all meditations
  findAll() {
    return meditationData.meditations;
  }

  //returns an array of recommended meditations
  //based on input of emotions
  findByEmotions(emotions) {
    //Create a working copy of the data since it's hardcoded and we don't want to modify it on every request
    // var meditations = meditationData.meditations.slice();
    var meditations = JSON.parse(JSON.stringify(meditationData.meditations));

    //loop through meditations and calculate how many emotions match
    meditations.forEach(meditation => {
      var matches = 0;
      meditation.emotions.forEach(emotion => {
        if (emotions.includes(emotion)) {
          matches++;
        }
      });

      //assign the number of matches to the meditation
      meditation.matches = matches;
    });

    //filter out meditations with 0 matches
    meditations = meditations.filter(meditation => meditation.matches > 0);
    //sort descending so the meditation with most matching emotions show up first
    meditations.sort((a, b) => b.matches - a.matches);
    return meditations;
  }
}

module.exports = Meditation;
