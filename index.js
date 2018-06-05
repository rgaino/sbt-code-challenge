const express = require("express");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
console.log("Setting up API routes");
apiRoutes(app);

const PORT = process.env.PORT || 5000;
console.log(`Setup completed, listening on ${PORT}`);
app.listen(PORT);
