const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updatedNotesController,
  deleteNoteController,
} = require("../controllers/notes.controller");

const router = express.Router();

// CREATE
router.post("/create", createNotesController);

// READ
router.get("/allNotes", getAllNotesController);

// READ ONE
router.get("/:id", getSingleNoteController);

// UPDATE VIA PUT
router.put("/:id", updatedNotesController);

//  UPDATE VIA PATCH
// soon

// DELETE
router.delete("/:id", deleteNoteController);

module.exports = router;
