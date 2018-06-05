const Meditation = require("../models/Meditation"); //Meditation model

module.exports = app => {
  //this method receives a list of emotions and return associated meditations
  app.get("/api/meditations", (req, res) => {
    var meditation = new Meditation();
    res.send(meditation.findAll());
  });
};
