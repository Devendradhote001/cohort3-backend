const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const notesRoute = require("./routes/notes.route");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ok got it");
});

app.use("/notes", notesRoute);

module.exports = app;
