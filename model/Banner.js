const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BannerSchema = new Schema({
   images:{
    type :[String],
    required : true
   }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Banner", BannerSchema)