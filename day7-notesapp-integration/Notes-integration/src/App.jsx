import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./components/NoteCard";

const App = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });
  const [updateNoteId, setUpdateNoteId] = useState(null);

  const [allNotes, setAllNotes] = useState([]);

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let getAllNotes = async () => {
    try {
      let res = await axios.get("http://localhost:3000/notes/allNotes");
      // console.log(res);
      setAllNotes(res.data.data);
    } catch (error) {
      console.log("error in get all notes api", error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (updateNoteId) {
      // api call for update note
      let res = await axios.put(
        `http://localhost:3000/notes/${updateNoteId}`,
        formValues,
      );
      console.log(res);
      setUpdateNoteId(null);
    } else {
      // api call for create note
      let res = await axios.post(
        "http://localhost:3000/notes/create",
        formValues,
      );
      console.log(res);
    }

    setFormValues({
      title: "",
      description: "",
    });
    getAllNotes();
  };

  let deleteNote = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`);
      console.log(res);
      getAllNotes();
    } catch (error) {
      console.log("error in delete note", error);
    }
  };

  let noteForUpdate = (note) => {
    console.log(note);
    setUpdateNoteId(note._id);
    setFormValues({
      title: note.title,
      description: note.description,
    });
  };

  return (
    <div className="h-screen p-5 flex flex-col gap-5">
      <h1 className="text-3xl font-semibold">Notes app</h1>

      <form
        onSubmit={handleSubmit}
        className="w-70 border gap-5 border-white p-4 rounded-xl flex flex-col"
      >
        <input
          onChange={handleChange}
          name="title"
          value={formValues.title}
          className="p-2 outline-none text-xl rounded border border-white"
          type="text"
          placeholder="Title"
        />
        <input
          onChange={handleChange}
          name="description"
          value={formValues.description}
          className="p-2 outline-none text-xl rounded border border-white"
          type="text"
          placeholder="Description"
          minLength={20}
          required
        />
        <button className="bg-blue-600 text-white p-2 rounded">
          {updateNoteId ? "Update note" : "Add note"}
        </button>
      </form>

      <div className="flex gap-4 flex-wrap">
        {allNotes.map((val) => (
          <NoteCard
            key={val._id}
            note={val}
            noteForUpdate={noteForUpdate}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
