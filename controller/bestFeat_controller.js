const Featured = require('../model/Featured')
const Best = require('../model/Best')
const path = require('path')

let createFeatured= async(req, res, next)=>{
    try{
        let images = [];
        // console.log(req.files);
        
          req.files.images?.forEach(img => {
            let img_name = Date.now() + '-' + Math.round(Math.random() * 1E9) + img.name; //from multer to make name of pictures different
            let img_res = img.mv(path.join(__dirname, '../uploads/' + img_name)) //to uploads the pictures on "uploads" file
            // console.log(img_res)
        
            images.push(img_name)
          })
          let featuredProp = await Featured.create({...req.body, images})
          res.send(featuredProp)
    }
    catch(err){
        next(err);
    }
}

let featuredProperty = async (req, res, next)=>{
    try{
let featured = await Featured.find();
if(featured){
    res.send(featured);
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

let createBest= async(req, res, next)=>{
    try{
        let images = [];
        // console.log(req.files);
        
          req.files.images?.forEach(img => {
            let img_name = Date.now() + '-' + Math.round(Math.random() * 1E9) + img.name; //from multer to make name of pictures different
            let img_res = img.mv(path.join(__dirname, '../uploads/' + img_name)) //to uploads the pictures on "uploads" file
            // console.log(img_res)
        
            images.push(img_name)
          })
          let bestProp = await Best.create({...req.body, images})
          res.send(bestProp)
    }
    catch(err){
        next(err);
    }
}

let getBest = async(req, res, next)=>{
    try{
    let search_term = req.query.search_term || ""
  
    let bestProperty = await Best.aggregate(
        [
            {
                $match: {
                  
                        categories: RegExp(search_term, "i") 
                }
            },
          
        ]
    )
    res.send({
       bestProperty
    })
    }
    catch(err){
        next(err)
    }
}
module.exports ={
    createFeatured,
    featuredProperty,
    createBest,
    getBest
}