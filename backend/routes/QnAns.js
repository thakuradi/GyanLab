const express = require("express");
const { Createqn, CreateAns } = require("./type");
const { question, answer } = require("../db");
const app = express.Router();
app.use(express.json());

app.post("/questions", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = Createqn.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "you sent the wrong input",
    });
    return;
  }
  await question.create({
    question: createPayload.question,
  });
  res.json({
    msg: "question added",
  });
});

app.get("/question", async function (req, res) {
  const questions = await question.find({});
  res.json({
    questions,
  });
});
app.post("/answers/:id", async function (req, res) {
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
app.get("/answer", async function (req, res) {
  const answer = await answer.find({});
  res.json({
    answer,
  });
});
module.exports=app;
