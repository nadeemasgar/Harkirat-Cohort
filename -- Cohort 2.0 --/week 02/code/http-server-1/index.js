const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();
// middlewares
app.use(bodyParser.json());

app.post("/post", function (req, res) {
  console.log(req.body);
  res.send("Hello World");
});

app.get("/", function (req, res) {
  // console.log(req.headers["authorization"]);
  res.send("Hello World");
});

app.listen(port, function () {
  console.log(`App is listening on port ${port}`);
});
