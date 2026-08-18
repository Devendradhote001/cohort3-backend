const express = require("express");

const app = express();
// middleware for accepting json data
app.use(express.json());
let port = 3000;

let users = [];

// create
app.post("/create", (req, res) => {
  let body = req.body;

  users.push(body);

  res.send("user saved successfully");
});

// get - Read
app.get("/", (req, res) => {
  res.send(users);
});

// update
app.put("/update/:id", (req, res) => {
  let { id } = req.params;
  let { name } = req.body;

  let updatedUser = users.map((val) =>
    val.id === id ? { ...val, name } : val
  );
  res.send(updatedUser);
});

// delete
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  let userData = users.filter((val) => val.id !== id);
  console.log(userData);
  users = userData;
  res.send(userData);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
