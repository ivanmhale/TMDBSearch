const express = require("express");

const app = express();

require("./routes")(app);

const port = process.env.PORT || 2000;
app.listen(port);
