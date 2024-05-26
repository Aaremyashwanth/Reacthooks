const express=require('express')
const nodemon=require('nodemon')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const cors=require('cors')
const dotenv=require('dotenv')
const loginRouter=require('./Router/router')

let app=express()
dotenv.config()
app.use(cors())
app.use(bodyparser.json())

app.get('/api/home',(req,res)=>{
    const friends=[
        {id:1,
        name:'yashwanth',
        age:'24',
        city:'hyd'
        },
        {
            id:2,
            name:'sravan',
            age:'25',
            city:'yld'   
        },
        {
            id:3,
        name:'prashanth',
        age:'24',
        city:'kurnool'
        }
    ]
    res.send(friends)
})

app.use('/user',loginRouter)
let port=process.env.port_uri||5000;

mongoose.connect(process.env.Mongo_uri)
.then(console.log("DB CONNECTED"))
.catch(()=>{console.log("DB not connected")})
app.listen(port,()=>{
    console.log("server started");
})