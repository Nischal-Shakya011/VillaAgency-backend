const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const {LUXURY_VILLA, PENTHOUSE, APARTMENT} = require('../constants/categories')

const PropertySchema = new Schema({
   area:{
   type: Number,
   required: true
   },
   bedrooms:{
    type: Number,
    required: true
   },
   bathrooms:{
    type: Number,
    required: true
   },
   floor:{
    type: Number,
    required: true
   },
   parking:{
    type: Number,
    required: true
   },
   location:{
    type: String,
    required: true
   },
   categories:{
    required: true,
    type: String,
    enum: [LUXURY_VILLA, PENTHOUSE, APARTMENT],
    set: function (value) {
        return value.toLowerCase();
   }
},
   price:{
    type: Number,
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

module.exports = mongoose.model("Property", PropertySchema)