const express = require("express");
const jwt = require("jsonwebtoken");
const app = express.Router();
const zod = require("zod");
const jwtpassword = "123456";
const { User } = require("../../db");
app.use(express.json());
const signupbody = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
});
app.post("/signup", async function (req, res) {
  const parsePayload = signupbody.safeParse(req.body);
  if (!parsePayload.success) {
    return res.status(411).json({
      msg: "incorrect input",
    });
  }
  const name = req.body.name;
  const username = req.body.email;
  const password = req.body.password;

  const existinguser = await User.findOne({ email: username });
  if (existinguser) {
    return res.status(400).send("Username already exist");
  }
  const user = await User.create({
    name,
    email: username,
    password,
  });
  res.status(200).json({
    msg: "user created sucessfully",
  });
  const signinbody = zod.object({
    email: zod.string().email(),
    password: zod.string(),
  });
  app.post("/signin", async function (req, res) {
    const parsePayload = signinbody.safeParse(req.body);
    if (!parsePayload.success) {
      return res.status(411).json({
        msg: "incorrect email or password",
      });
    }
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) {
      return res.status(401).json({
        msg: "Invalid credentials",
      });
    }
    const token = jwt.sign({ userId: user._id }, jwtpassword);
    res.status(200).json({
      msg: "sign in successful",
      token: token,
    });
  });
});

module.exports=app;
