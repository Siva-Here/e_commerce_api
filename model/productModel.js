const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
    "name":{
        type:String,
        required:true
    },
    "price":{
        type:Number,
        required:[true,"price must be Provided"]
    },
    "featured":{
        type:Boolean,
        required:true
    },
    "rating":{
        type:Number,
        default:4.9
    },
    "createdAt":{
        type:Date,
        default:Date.now()
    },
    "company":{
        type:String,
        required:true,
        enum:{
            values:["samsung","apple","dell","mi"],
            message:`{VALUE} is not supported`
        }
    }

})

const Products=mongoose.model("Products",productSchema)
module.exports=Products