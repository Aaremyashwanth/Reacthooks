const logincontroll=require("../controller/logincontroller")
const express=require('express')
const router=express.Router()
router.post('/login',logincontroll.logincontroll)

module.exports=router