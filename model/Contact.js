const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const ContactSchema = new Schema({
   name:{
   type: String,
   required: true
   },

   email:{
    type: String,
    required: true
   },

   subject:{
    type: String,
    required: true
   },

   message:{
    type: String,
   },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Contact", ContactSchema)