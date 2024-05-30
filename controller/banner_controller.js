let Banner = require('../model/Banner')
const path = require("path")


const createBanner = async(req, res, next) =>{
    try{
        let images = [];
        // console.log(req.files);
        
          req.files.images?.forEach(img =>{
            let img_name = Date.now() + '-' + Math.round(Math.random() * 1E9) + img.name; //from multer to make name of pictures different
            let img_res = img.mv(path.join(__dirname, '../uploads/' + img_name)) //to uploads the pictures on "uploads" file
            // console.log(img_res)
        
            images.push(img_name)
          })
          let banImg = await Banner.create({images});
          res.send(banImg)
}
    catch(err)
    {
        next(err);
    }
}

const getBanner = async(req,res,next)=>{
try{
let bannerImg = await Banner.findOne({_id: '6569a6e101b11453527254a7'});
res.send(bannerImg)
}
catch(err){
    next(err);
}
}

module.exports ={
    createBanner,
    getBanner
}