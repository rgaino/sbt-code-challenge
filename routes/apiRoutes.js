//This module sets up all API routes
module.exports = app => {
  //Endpoint to get meditations
  app.get("/api/meditations", (req, res) => {
    res.send("Hi");
  });
};
