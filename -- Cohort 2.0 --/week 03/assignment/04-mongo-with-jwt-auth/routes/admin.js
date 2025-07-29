const { Router } = require("express");
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { adminSecret } = require("../secrets");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const isAdminExist = await Admin.findOne({ username, password });

  console.log(isAdminExist);

  if (!isAdminExist) {
    await Admin.create({ username, password });
    res.status(201).json({ msg: "Admin created" });
  } else {
    res.status(403).json({ msg: "Admin already exists" });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const isAdminExist = await Admin.findOne({ username, password });

  if (isAdminExist) {
    const token = jwt.sign({ username, password }, adminSecret);
    res.status(200).json({ token });
  } else {
    res.status(404).json({ msg: "User not found" });
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  Course.create({
    title,
    description,
    price,
    imageLink,
  })
    .then((course) => {
      res
        .status(201)
        .json({ msg: "Course created successfully", courseId: course._id });
    })
    .catch((err) => {
      res.send(400).json({ msg: "Bad Request" });
    });

  /*     try {
            const course = await Course.create({
              title,
              description,
              price,
              imageLink,
            });

            console.log("Course created successfully:", course);
          } catch (err) {
            console.error("Error creating course:", err);
          } 
    */
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const response = await Course.find();
    res.json({
      courses: response,
    });
  } catch (err) {
    res.json({
      msg: "Incorrect inputs",
    });
  }
});

module.exports = router;
