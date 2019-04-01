const express = require("express");
const db = require("./data/db");

const server = express();

server.use(express.json());

server.get("/hubs", (req, res) => {
  db.hubs
    .find()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.log("arghghg erorrr");
    });
});

server.post("/hubs", (req, res) => {
  db.hubs
    .add({ name: req.body.name })
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.log("arghghg erorrr");
    });
});

server.listen(4000, () =>
  console.log(`
    Listening on port 4000
`)
);
