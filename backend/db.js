const mongoose = require("mongoose");
// mongodb+srv://thakur:7X%403uw8r@cluster0.ai2rpio.mongodb.net/
mongoose.connect(
  "mongodb+srv://aditya25022002:rOzA619i71BJMpq3@gyanlab.jpxqkvy.mongodb.net/"
);

const QnAnSchema=mongoose.Schema({
  userID:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
  question:"string",
  answer:"Array"
})
const UserSchema = mongoose.Schema({
  name: "string",
  email: "string",
  password: "string",
  token: "string",
});
const qnans=mongoose.model("qnans",QnAnSchema)
const User = mongoose.model("User", UserSchema);
module.exports = {
  question: question,
  answer: answer,
  User: User,
  qnans:qnans,
};
