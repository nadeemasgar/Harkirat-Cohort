const { Router } = require("express");
const { User, Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username, password });
  if (existingUser) {
    return res.status(400).send({
      msg: "User already exists",
    });
  }

  try {
    await User.create({ username, password });

    res.status(201).send({ msg: "User created successfully" });
  } catch (err) {
    res.send(500).send("Internal Server Error");
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const response = await Course.find();

    res.json({
      courses: response,
    });
  } catch (err) {
    res.send(500).send("Internal Server Error");
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic'
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    { username: username },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );

  res.json({
    message: "Purchase complete!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;

  const user = await User.findOne({ username });

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
