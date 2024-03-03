const mongoose=require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("mongodb connected successfully")
}).catch((err)=>{
    console.log("Mongodb not connected...")
    console.log(err)
})
