const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const FeaturedSchema = new Schema({
   area:{
   type: Number,
   required: true
   },
   
   message:{
    type: String,
    required: true
   },

   payment_process:{
    type: String,
    required: true
   },

   contract:{
    type: String,
    required: true
   },

   images:{
    type :[String],
    required : true
   },
   
}, {
    timestamps: true,
});

module.exports = mongoose.model("Featured", FeaturedSchema)