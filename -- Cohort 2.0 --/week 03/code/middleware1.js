const app = express();

// 🟡 Defining middleware to check user credentials
function userMiddleware(req, res, next) {
  if (username != "harkirat" && password != "pass") {
    // If username and password are incorrect, block the request
    res.status(403).json({
      msg: "Incorrect inputs",
    });
  } else {
    // Allow request to continue to the next middleware or route handler
    next();
  }
}

// 🟡 Defining middleware to validate kidneyId
function kidneyMiddleware(req, res, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    // If kidneyId is invalid, return an error
    res.status(403).json({
      msg: "Incorrect inputs",
    });
  } else {
    // Proceed to the next middleware or route handler
    next();
  }
}

// 🟢 Using the middleware in routes

// Route 1: health-checkup — user + kidney validation
app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  function (req, res) {
    // do something with kidney here
    res.send("Your heart is healthy");
  }
);

// Route 2: kidney-check — same middleware reused
app.get("/kidney-check", userMiddleware, kidneyMiddleware, function (req, res) {
  // do something with kidney here
  res.send("Your heart is healthy");
});

// Route 3: heart-check — only user middleware applied
app.get("/heart-check", userMiddleware, function (req, res) {
  // do something with user here
  res.send("Your heart is healthy");
});
