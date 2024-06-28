const mongoose= require("mongoose")
const express = require("express")
const jwt=require("jsonwebtoken")
const app=express()
const zod = require("zod")
const jwtpassword="123456"
const { User } = require("./db")
app.use(express.json())
const signupbody = zod.object({
    Name: zod.string(),
    email: zod.string().email(),
    password: zod.string(),
})
app.post("/signup",async function(req,res){
    const parsePayload= signupbody.safeParse(req.body)
    if(!parsePayload){
        return res.status(411).json({
            msg:"incorrect input"
        })
    }
    const name=req.body.name;
    const username=req.body.username;
    const password=req.body.password;
    
    const existinguser = await User.findOne({email:username});
    if(existinguser){
        returnres.status(400).send("Username already exist")
    }
    const user =await User.create({
        name,
        email:username,
        password
    })
    res.status(200).json({
        msg:"user created sucessfully"
    })

})
app.listen(3000)
