const express = require("express");
const NotesModel = require("./models/notes.model");
const connectDB = require("./config/db");
const createNotesController = require("./controllers/notes.controller");
const notesRoute = require("./routes/notes.route");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ok got it");
});

app.use("/notes", notesRoute);

module.exports = app;
