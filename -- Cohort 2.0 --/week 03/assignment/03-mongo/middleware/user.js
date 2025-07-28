const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  try {
    const response = await User.findOne({ username, password });

    if (response) {
      next();
    } else {
      return res.status(403).json({
        msg: "User doesn't exist",
      });
    }
  } catch (err) {
    res.send(500).send("Internal Server Error");
  }
}

module.exports = userMiddleware;
