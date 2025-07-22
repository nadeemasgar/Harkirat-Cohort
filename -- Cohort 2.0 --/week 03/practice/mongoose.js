const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:Nadeem%40123@cluster0.xpmnqir.mongodb.net/user_practice"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: email });
  // CRUD
  if (existingUser) {
    return res.status(400).send("Username already exists");
  }

  try {
    await User.create({
      name,
      email,
      password,
    });

    res.status(201).send({ msg: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.send(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("App is listened on port 3000");
});
