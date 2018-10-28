const express = require("express");

const app = express();

require("./routes")(app);

if (process.env.NODE_ENV === "production") {
  const path = require("path");

  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

const port = process.env.PORT || 2000;
app.listen(port);
