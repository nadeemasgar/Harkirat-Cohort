const { Router } = require("express");
const router = Router();
const { userSecret } = require("../secrets");
var jwt = require("jsonwebtoken");
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  const isUserExist = await User.findOne({ username, password });
  console.log(isUserExist);
  if (isUserExist) {
    console.log("hi")
    return res.status(400).json({
      msg: "User already exists",
    });
  }

  try {
    const response = await User.create({ username, password });

    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Error" });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const isUserExist = await User.findOne({ username, password });

  if (!isUserExist) {
    res.status(400).json({
      msg: "User does not exists",
    });
  }

  try {
    const token = jwt.sign({ username, password }, userSecret);
    res.status(200).json({ msg: "User Authenticated", token });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  try {
    const response = await Course.find();
    res.status(400).json({ courses: response });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.username;

  try {
    await User.updateOne(
      { username },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );

    res.json({
      message: "Purchase complete!",
    });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.username;
  try {
    const user = await User.findOne({ username });

    const courses = await Course.find({
      _id: {
        $in: user.purchasedCourses,
      },
    });

    res.json({
      courses: courses,
    });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
