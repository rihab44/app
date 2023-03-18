var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var productSchema = new Schema({
    nom :{
        type : String,
        required : true,

    },
    prix: {
        type : Number,
        required : true,
    },
    code : {
        type :Number,
        required : true,

    },
    stock : {
        type: Number,
        required : true,

    },
    criteredemesure:{
        type : Number,
        required: true,
    },

})





module.exports = mongoose.model('product', productSchema)
