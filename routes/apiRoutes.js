const Meditation = require("../models/meditation"); //Meditation model

module.exports = app => {
  //this method receives a list of emotions and returns associated meditations
  app.get("/api/meditations", (req, res) => {
    var meditation = new Meditation();

    //parse the query string and look for the emotions array
    const emotionList = req.query.emotions;
    if (!emotionList) {
      //no emotions passed, return all meditations
      return res.send(meditation.findAll());
    }

    const emotions = emotionList.split(",");
    return res.send(meditation.findByEmotions(emotions));
  });
};
