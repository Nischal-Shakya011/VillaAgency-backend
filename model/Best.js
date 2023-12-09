const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const {LUXURY_VILLA, PENTHOUSE, APARTMENT} = require('../constants/categories')


const BestSchema = new Schema({
   area:{
   type: Number,
   required: true
   },
   
   information:{
    type: String,
    required: true
   },

   payment_process:{
    type: String,
    required: true
   },

   floor_number:{
    type: Number,
    required: true
   },

   room_number:{
    type: Number,
    required: true
   },

   parking_available:{
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

   images:{
    type :[String],
    required : true
   },
   
}, {
    timestamps: true,
});

module.exports = mongoose.model("Best", BestSchema)