const express =require("express")
const{Createqn}=require("./type")
const {question}=require("./db")
const app = express()
app.use(express.json())

app.post("/questions",async function(req,res){
    const createPayload=req.body;
    const parsePayload=Createqn.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong input"
        })
        return;
    }
    await question.create({
        question:createPayload.question
    })
})

app.get("/question",async function(req,res){
    const questions= await question.find({})
    res.json({
        questions
    })})


app.listen(3000)