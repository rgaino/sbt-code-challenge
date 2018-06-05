const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const loggerMiddleware = require("./middlewares").loggerMiddleware;

console.log("Setting up express, middlewares and API routes");
const app = express();
app.use(loggerMiddleware);
apiRoutes(app);

const PORT = process.env.PORT || 5000;
console.log(`Setup completed, listening on ${PORT}`);
app.listen(PORT);
