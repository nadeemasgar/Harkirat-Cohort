const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "12345";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "Harkirat Singh",
    email: "harkirat@gmail.com",
    password: "Harkirat@123",
  },
  {
    username: "Nadeem Asgar",
    email: "nadeemasgar@gmail.com",
    password: "Nadeem@123",
  },
  {
    username: "Abhishek",
    email: "abhishek@gmail.com",
    password: "abhishek@123",
  },
];

app.post("/login", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const isUserPresent = ALL_USERS.find(
    (user) => user.email === email && user.password === password
  );

  if (!isUserPresent) {
    return res.status(404).send("User does not exist");
  }

  const token = jwt.sign(
    {
      username,
      email,
    },
    jwtPassword
  );

  res.json({ token, msg: "User Authenticated" });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;

  console.log(token);

  if (!token) {
    return res.status(401).json({ msg: "User unauthorized" });
  }

  jwt.verify(token, jwtPassword, (err, user) => {
    if (err) return res.status(403).json({ msg: "Invalid token" });

    const filteredUser = ALL_USERS.filter(
      (value) => value.username !== user.username && value.email !== user.email
    );

    console.log(user);

    res.status(200).json({
      users: filteredUser,
    });
  });
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
