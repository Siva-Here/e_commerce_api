const Products=require('../model/productModel')

const getAllProducts=async(req,res)=>{
    try{
        const {company,name,featured,sort,select}=req.query;
        const queryObject={}
        if(company){
            queryObject.company=company 
        }
        if(name){
            queryObject.name={$regex:name,$options:"i"}
        }
        if(featured){
            queryObject.featured=featured
        }
        let apiData=Products.find(queryObject)
        if(sort){
            let sortFix=sort.replace(","," ")
            apiData=apiData.sort(sortFix)
        }
        if(select){
            let selectFix=select.split(",").join(" ")
            apiData=apiData.select(selectFix)
        }
        let page=Number(req.query.page)||1
        let limit=Number(req.query.limit)||3
        let skip=(page-1)*limit
        apiData=apiData.skip(skip).limit(limit)
        const myData=await apiData
        res.status(200).json({myData})
    }
    catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}

const getAllProductsTesting=async(req,res)=>{
    try{
        const myData=await Products.find(req.query)
        res.status(200).json({myData})
    }
    catch(err){
        res.status(400).send(err)
    }
}

module.exports={getAllProducts,getAllProductsTesting}