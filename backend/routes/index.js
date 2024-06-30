const express = require("express");
const userRouter = require("./auth/user");
const QnAnsRouter = require("./QnAns");

const router = express.Router();

router.use("/user", userRouter);
router.use("/account", QnAnsRouter);

module.exports = router;   