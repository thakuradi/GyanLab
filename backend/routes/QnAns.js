const express = require("express");
const { Createqn, CreateAns } = require("./type");
const { qnans, answer,} = require("../db");
const { authMiddleware } = require("../middleware/middleware");
const app = express.Router();
const multer =require("multer")
const zod=require("zod")
app.use(express.json());

app.post("/questions", authMiddleware, async function (req, res) {
  const createPayload = req.body;
  const parsePayload = Createqn.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "you sent the wrong input",
    });
    return;
  }
  await qnans.create({
    userID: req.userId,
    question: req.body.question,
  });
  res.json({
    msg: "question added",
  });
});

app.get("/userquestion", authMiddleware, async function (req, res) {
  const userID = req.userId;
  const question = await qnans.find({
    userID: userID,
  });
  res.json({
    question
  });
});
imagebody=zod.object({
  image:zod.string()
})
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() 
    cb(null, uniqueSuffix=file.originalname)
  }
})

const upload = multer({ storage: storage })
app.post("/upload",upload.single("image"),async function(req,res){
  const imagename=req.file.filename   
})
app.post("/answers", authMiddleware, async function (req, res) {
  const createPayload = req.body;
  const questionId = req.headers['question-id']
  const parsePayload = CreateAns.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "you sent the wrong input",
    });
    return;
  }
  const {answer} = createPayload;
  const question = await qnans.findById(questionId);
  if (!question) {
    return res.status(404).json({ msg: "Question not found" });
  }
  console.log(answer)
  const result = await qnans.updateOne(
    { _id: questionId },
    { $push: { answer: answer } }
  );
  // question.answer.(answer);
  // await question.save();

  res.json({
    msg: "Answer added successfully",
    data: result,
  });
});
app.get("/answer", authMiddleware, async function (req, res) {
  const answers = await answer.find({}).populate("questionId", "question");
  res.json({
    answers,
  });
});
module.exports = app;
