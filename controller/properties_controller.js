const Property = require('../model/Properties')
const path = require('path')


let get = async(req, res, next)=>{
    try{
    let search_term = req.query.search_term || ""
    let page = parseInt(req.query.page) || 1
    let per_page = parseInt(req.query.per_page) || 5
    let properties = await Property.aggregate(
        [
            {
                $match: {
                    // $or: [
                    //     { name: RegExp(search_term, "i") },
                        categories: RegExp(search_term, "i") 
                    // ]
                }
            },
          
         
            {
                $skip: ((page - 1) * per_page)
            },
            {
                $limit: per_page
            },
        ]
    )
    res.send({
        metaData:{
            page,
            per_page
        },
       properties: properties
    })
    }
    catch(err){
        next(err)
    }
}
let createProperty = async(req, res,next)=>{
    try{
        let images = [];
        // console.log(req.files);
        
          req.files.images?.forEach(img => {
            let img_name = Date.now() + '-' + Math.round(Math.random() * 1E9) + img.name; //from multer to make name of pictures different
            let img_res = img.mv(path.join(__dirname, '../uploads/' + img_name)) //to uploads the pictures on "uploads" file
            // console.log(img_res)
        
            images.push(img_name)
          })
          let property = await Property.create({...req.body, images})
          res.send(property)
    }
    catch(err){
        next(err);
    }
}

let fetchSingleProperty = async (req, res, next)=>{
    try{
let property = await Property.findById(req.params.id)
if(property){
    res.send(property)
}
else
{
    res.status(404).send({
        msg:"Resource not found"
    })
}
    }
    catch(err){
        next(err);
    }
}
module.exports ={
    get,
    createProperty,
    fetchSingleProperty
}