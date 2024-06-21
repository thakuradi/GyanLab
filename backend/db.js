const mongoose = require("mongoose")
// mongodb+srv://thakur:7X%403uw8r@cluster0.ai2rpio.mongodb.net/
mongoose.connect('mongodb+srv://aditya25022002:su417vkUhfPMdQuY@gyanlab.jpxqkvy.mongodb.net/')
const QnSchema = mongoose.Schema({
    question:"string",
    
})
const question = mongoose.model('todos',todoSchema)
module.exports={
    question
}