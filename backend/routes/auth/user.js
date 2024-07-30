const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const { User } = require("../../db");
const router = express.Router();
const jwtpassword = "123456";
const { authMiddleware } = require("../../middleware/middleware");
router.get("/", (req, res) => {
  res.status(200).json({
    message: "server running",
  });
});
router.get("/me", authMiddleware, async (req, res) => {
  const userId = req.userId;

  if (!userId) {
    return res.status(403).json({
      message: "not logged in",
    });
  }

  const user = await User.findById(userId);

  res.status(200).json({
    user: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
});
const signupbody = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
});  

const signinbody = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

router.post("/signup", async function (req, res) {
  const parsePayload = signupbody.safeParse(req.body);
  if (!parsePayload.success) {
    return res.status(400).json({
      msg: "Incorrect input",
    });
  }

  const { name, email, password } = req.body;

  const existinguser = await User.findOne({ email });
  if (existinguser) {
    return res.status(400).json({
      msg: "Username already exists",
    });
  }

  const user = await User.create({ name, email, password });
  res.status(201).json({
    msg: "User created successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

router.post("/signin", async function (req, res) {
  const parsePayload = signinbody.safeParse(req.body);
  if (!parsePayload.success) {
    return res.status(400).json({
      msg: "Incorrect email or password",
    });
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).json({
      msg: "Invalid credentials",
    });
  }

  const token = jwt.sign({ userId: user._id }, jwtpassword);
  res.status(200).json({
    msg: "Sign in successful",
    token: token,
  });
});

module.exports = router;
