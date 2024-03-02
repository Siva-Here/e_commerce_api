const express=require('express')
const PORT=process.env.PORT||8000
require('../db/conn')
const Products=require('../model/productModel')
const app=express()
const productJson=require('../products.json')

const start=async()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`Sever Running successfully on ${PORT}`)
        }) 
    }
    catch(err){
        console.log(err)
    }
}
app.use("/api/products",require('../routes/products'))
app.get("/",(req,res)=>{
    res.status(200).send('I am Live...')
})
start()