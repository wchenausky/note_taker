const path = require("path");
const fs = require("fs");
const db = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });

  app.post("/api/notes", (req, res) => {
    id = uuidv4();
    const newNotes = {
      id: id,
      title: req.body.title,
      text: req.body.text
    }

    fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
      if (err) throw err;
      db.push(newNotes);

      fs.writeFile(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(db),
        function (err) {
          if (err) throw err;
          res.send(newNotes);
        }
      );
    });
  });
  app.delete("/api/notes/:id", (req, res) => {
    const { id } = req.params;
    fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
      if (err) throw err;
      let allNotes = JSON.parse(data);
      let filteredNotes = allNotes.filter((note) => note.id != id);
      db.length = 0;
      filteredNotes.forEach((note) => db.push(note));
      fs.writeFile(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(filteredNotes),
        function (err) {
          if (err) throw err;
          res.send(filteredNotes);
        }
      );
    });
  });
};
