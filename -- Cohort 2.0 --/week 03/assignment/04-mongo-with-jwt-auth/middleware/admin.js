const jwt = require("jsonwebtoken");
const { adminSecret } = require("../secrets");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization; // bearer token

  const words = token.split(" "); // ["Bearer", "token"]
  const jwtToken = words[1]; // token

  jwt.verify(jwtToken, adminSecret, (err) => {
    if (err) {
      return res.status(403).json({ msg: "Unauthorised Admin" });
    } else {
      next();
    }
  });
}

module.exports = adminMiddleware;
