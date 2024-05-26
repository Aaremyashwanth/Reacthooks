const Login=require('../models/Login')
const mongodb=require('mongodb')
const bcrypt=require('bcrypt')

const logincontroll=async(req,res)=>{
    const {username,email,Password}=req.body
    try {
        const saltRounds = 10;
        
        const userlogin=new Login({
            username,
            email,
            Password:hashedpassword
        })
        await userlogin.save();
        res.status(201).json({login:"sucessfull"})
        console.log("registered");
    } catch (error) {
        console.error(error);
        res.status(500).json({login:"Not sucessfull"})
    }
  }
  module.exports={logincontroll}