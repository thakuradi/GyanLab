const express = require("express");
const { Createqn, CreateAns } = require("./type");
const { qnans, answer, images } = require("../db");
const { authMiddleware } = require("../middleware/middleware");
const app = express.Router();
const multer = require("multer");
const path = require('path');
const zod = require("zod");
const fs = require('fs');

app.use(express.json());

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Not an image! Please upload an image.'), false);
    }
  }
})

app.post("/questions", upload.single("image"), authMiddleware, async function (req, res) {
  try {
    const createPayload = req.body;
    const parsePayload = Createqn.safeParse(createPayload);
    if (!parsePayload.success) {
      return res.status(411).json({
        msg: "You sent the wrong input",
      });
    }
    console.log(req.body)
    const newQuestion = await qnans.create({
      userID: req.userId,
      question: req.body.question,
      image: req.file ? req.file.filename : null
    });
    res.json({
      msg: "Question added",
      question: newQuestion
    });
  } catch (error) {
    console.error("Error in /questions:", error);
    res.status(500).json({
      msg: "Internal server error",
      error: error.message
    });
  }
});

app.get("/userquestion", authMiddleware, async function (req, res) {
  try {
    const questions = await qnans.find({});
    res.json({
      question: questions.map(q => ({
        _id: q._id,
        question: q.question,
        image: q.image || null // Ensure image is always included, even if null
      }))
    });
  } catch (error) {
    console.error("Error in /userquestion:", error);
    res.status(500).json({
      msg: "Internal server error",
      error: error.message
    });
  }
});

app.post("/upload", upload.single("image"), async function(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ status: "error", message: "No file uploaded" });
    }
    const imagename = req.file.filename;
    await images.create({ image: imagename });
    res.json({
      status: "OK",
      filename: imagename
    });
  } catch (error) {
    console.error("Error in /upload:", error);
    res.status(500).json({
      status: "error",
      message: error.message
    });
  } 
})

app.get("/get-image", async (req, res) => {
  try {
    const data = await images.find({});
    res.send({ status: "ok", data: data });
  } catch (error) {
    console.error("Error in /get-image:", error);
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
})

app.post("/questions", upload.single("image"), authMiddleware, async function (req, res) {
  try {
    const createPayload = req.body;
    const parsePayload = Createqn.safeParse(createPayload);
    if (!parsePayload.success) {
      return res.status(411).json({
        msg: "You sent the wrong input",
      });
    }
    console.log(req.body)
    const newQuestion = await qnans.create({
      userID: req.userId,
      question: req.body.question,
      image: req.file ? req.file.filename : null
    });
    res.json({
      msg: "Question added",
      question: newQuestion
    });
  } catch (error) {
    console.error("Error in /questions:", error);
    res.status(500).json({
      msg: "Internal server error",
      error: error.message
    });
  }
});

app.get("/answer", authMiddleware, async function (req, res) {
  try {
    const questionId = req.headers["id"]
    const question = await qnans.findById(questionId)
    if (!question) {
      return res.status(404).json({ msg: "Question not found" });
    }
    const answers = question.answer
    res.json({
      answers,
    });
  } catch (error) {
    console.error("Error in /answer:", error);
    res.status(500).json({
      msg: "Internal server error",
      error: error.message
    });
  }
});

module.exports = app;