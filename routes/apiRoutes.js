const Meditation = require("../models/Meditation");

module.exports = app => {
  app.get("/api/meditations", (req, res) => {
    var meditation = new Meditation();

    res.send(meditation.findAll());
  });
};
