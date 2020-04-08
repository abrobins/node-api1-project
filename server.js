const express = require("express");
const db = require("./database.js");

// creates our server instance
const server = express();

// we'll talk about this later
server.use(express.json());

server.get("/api/users", (req, res) => {
  const users = db.getUsers();

  if (!users) {
    res
      .status(500)
      .json({ errorMessage: "The users information could not be retrieved" });
  } else {
    res.json(users);
  }
});

server.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = db.getUserById(userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      message: "The user with the specified ID does not exist."
    });
  }
});

server.post("/api/users", (req, res) => {
  if (!req.body.name || !req.body.bio) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  }

  const newUser = db.createUser({
    name: req.body.name,
    bio: req.body.bio
  });
  res.status(201).json(newUser);
});

server.delete("/api/users/:id", (req, res) => {
  const user = db.getUserById(req.params.id);

  if (user) {
    db.deleteUser(user.id);
    // 204 is just a successful empty response
    res.status(204).end();
  } else {
    res.status(404).json({
      message: "The user with the specified ID does not exist."
    });
  }
});

server.listen(8080, () => {
  console.log("server started at port 8080");
});
