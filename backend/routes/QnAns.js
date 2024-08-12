const express = require("express");
const { Createqn, CreateAns } = require("./type");
const { qnans, answer,images} = require("../db");
const { authMiddleware } = require("../middleware/middleware");
const app = express.Router();
const multer = require("multer");
const zod=require("zod");
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
  const question = await qnans.find({ });
  res.json({
    question
  });
});
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
  try {
    await images.create({image:imagename}
  )
  res.json({
    status: "OK",
  });
  } catch (error) {
    res.json({
      status: error,
    });
  } 
})
app.get("/get-image",async (req,res)=>{
  try {
    images.find({}).then((data)=>{
      res.send({stats:"ok",data:data})
    })
  } catch (error) {
    res.send({status:error})
  }
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
  
  console.log(answer,{questionId})
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
  const questionId = req.headers["id"]
  const question = await qnans.findById(questionId)
  const answers=question.answer
  res.json({
    answers,
  });
});
module.exports = app;
