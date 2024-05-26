const mongoose=require('mongoose')
const loginschema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    }

})
const Login=mongoose.model("Login",loginschema)
module.exports=Login