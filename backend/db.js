const mongoose = require("mongoose")
// mongodb+srv://thakur:7X%403uw8r@cluster0.ai2rpio.mongodb.net/
mongoose.connect('mongodb+srv://aditya25022002:rOzA619i71BJMpq3@gyanlab.jpxqkvy.mongodb.net/')
const QnSchema = mongoose.Schema({
    question:"string",
    
})
const AnsSchema=mongoose.Schema({
    answer:"string",
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'question', required: true }
})
const UserSchema=mongoose.Schema({
    name:"string",
    email:"string",
    password:"string",
    token:"string"

})
const question = mongoose.model('question',QnSchema)
const answer =mongoose.model('answer',AnsSchema)
const User=mongoose.model("User",UserSchema)
module.exports={
   question:question,
   answer:answer,
   User:User

 }