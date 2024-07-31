const mongoose = require("mongoose");
//mongodb+srv://aditya25022002:PaC7BiTBkI4EnliG@gyanlab.jpxqkvy.mongodb.net/
mongoose.connect(
  "mongodb+srv://aditya25022002:PaC7BiTBkI4EnliG@gyanlab.jpxqkvy.mongodb.net/"
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
  User: User,
  qnans:qnans,
};
