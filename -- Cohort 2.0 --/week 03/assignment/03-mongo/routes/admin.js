const { Router } = require("express");
const { z } = require("zod");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const existingAdmin = await Admin.findOne({ username, password });

  if (existingAdmin) {
    return res.status(400).json({
      msg: "Admin already exists",
    });
  }

  try {
    await Admin.create({
      username,
      password,
    });

    res.status(201).send({ msg: "Admin created successfully" });
  } catch (err) {
    res.send(500).send("Internal Server Error");
  }
});

const courseSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number().positive(),
  imageLink: z.string().url(),
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  const result = courseSchema.safeParse(req.body);

  if (!result.success) {
    res.status(411).json({
      msg: "input is invalid",
    });
  }

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find();

  res.json({
    courses: response,
  });
});

module.exports = router;
