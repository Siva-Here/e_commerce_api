const getAllProducts=async(req,res)=>{
    try{
        res.status(200).json({"msg":"These are all products..."})
    }
    catch(err){
        res.status(400).send(err)
    }
}

const getAllProductsTesting=async(req,res)=>{
    try{
        res.status(200).json({"msg":"These are all products for testing..."})
    }
    catch(err){
        res.status(400).send(err)
    }
}

module.exports={getAllProducts,getAllProductsTesting}