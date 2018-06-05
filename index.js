const express = require("express");
const apiRoutes = require("./routes/apiRoutes");

//Setting up API routes
const app = express();
apiRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
