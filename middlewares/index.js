//loggerMiddleware that will intercept every request
//to Express and log the method and route
const loggerMiddleware = function(req, res, next) {
  const logString = req.method + " on " + req.originalUrl;
  console.log(logString);
  next();
};

module.exports = { loggerMiddleware };
