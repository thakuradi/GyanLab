const express = require("express");
const { Createqn, CreateAns } = require("./type");
const { question, answer } = require("../db");
const {authMiddleware}=require("../middleware/middleware")
const app = express.Router();
app.use(express.json());


app.post("/questions",authMiddleware, async function (req, res) {
  const createPayload = req.body;
  const parsePayload = Createqn.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "you sent the wrong input",
    });
    return;  
  }
  await question.create({
    userID:req.userID,
    question: createPayload.question,
  });
  res.json({
    msg: "question added",
  });
});
 
app.get("/question",authMiddleware, async function (req, res) {
  const userID=req.userID         
  const questions = await question.find({
    userID:userID,
  });
  res.json({ 
    questions,
  });
});
app.post("/answers/:id",authMiddleware, async function (req, res) {
  const { id } = req.params;
  const createPayload = req.body;
  const parsePayload = CreateAns.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "you sent the wrong input",
    });
    return;
  }
  await answer.create({
    answer: createPayload.answer,
    questionId: id,
  });
  res.json({
      
    msg: "answer  added",
  });
});
app.get("/answer",authMiddleware, async function (req, res) {
  const answers = await answer.find({}).populate('questionId', 'question');
  res.json({
    answers,
  });
});
module.exports=app;
