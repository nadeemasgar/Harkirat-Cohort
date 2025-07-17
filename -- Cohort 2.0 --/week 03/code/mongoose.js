const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:Nadeem%40123@cluster0.xpmnqir.mongodb.net/userappnew"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });
  // CRUD -> create, update, delete, read
  if (existingUser) {
    return res.send(400).send("Username already exists");
  }

  await User.create({
    name,
    email: username,
    password,
  });

  /* 
  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  user.save();
 */

  res.json({
    msg: "User created successfully",
  });
});

app.listen(3000);
