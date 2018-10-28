const fetch = require("node-fetch");
const secrets = require("../secrets");

module.exports = app => {
  app.get("/api/popular", (req, res) => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=" + secrets.apiKey
    )
      .then(response => response.json())
      .then(parsed => {
        const ordered = parsed.results.sort((a, b) => {
          return b.popularity - a.popularity;
        });
        res.send(ordered);
      });
  });

  app.get("/search/:term", (req, res) => {
    const term = req.params.term.split(" ").join("+");
    fetch(
      "https://api.themoviedb.org/3/search/multi?api_key=" +
        secrets.apiKey +
        "&query=" +
        term
    )
      .then(response => response.json())
      .then(parsed => {
        const ordered = parsed.results.sort((a, b) => {
          return b.popularity - a.popularity;
        });
        res.send(ordered);
      });
  });
};
