const Contact = require('../model/Contact')
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required(),   
    email: Joi.string().email().required()
})

let contactInfo = async(req, res, next)=>{
    try{
        let { error } = schema.validate(req.body,
            {
                abortEarly: false,
                stripUnknown: false,
                allowUnknown: true,
            })

        // console.log("errors", error?.details)

        if (error?.details) {
            let errors = error?.details.map(err => {
                return{
             params : err.path,
             msg : err.message
                 }
         
                })
          
            res.status(400).send({
                // errors: error?.details
                errors
            })
            return;
        }

let info = await Contact.create({...req.body})
res.send(info)
    }
    catch(err){
        next(err)
    }
}
module.exports ={
    contactInfo
}