const mongoose = require("mongoose")
// mongodb+srv://thakur:7X%403uw8r@cluster0.ai2rpio.mongodb.net/
mongoose.connect('mongodb+srv://aditya25022002:su417vkUhfPMdQuY@gyanlab.jpxqkvy.mongodb.net/')
const QnSchema = mongoose.Schema({
    question:"string",
    
})
const AnsSchema=mongoose.Schema({
    answer:"string",
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'question', required: true }
})
const question = mongoose.model('question',QnSchema)
const answer =mongoose.model('answer',AnsSchema)
module.exports={
   question:question,
   answer:answer
 }