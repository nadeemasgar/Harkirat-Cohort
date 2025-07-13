const express = require("express");
const app = express();

// Define a route with multiple middleware functions
app.get(
  "/health-checkup",

  // 🧩 Middleware 1
  function (req, res, next) {
    console.log("hi from req1");
    next(); // Pass control to the next middleware
  },

  // 🧩 Middleware 2
  function (req, res, next) {
    console.log("hi from req2");
    next(); // Pass control to the next middleware
  },

  // ✅ Final Route Handler
  function (req, res) {
    console.log("hi from final handler");
    res.send("Health check completed");
  }
);

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
