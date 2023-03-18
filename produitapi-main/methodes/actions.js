var product = require('../models/product');
var config = require('../config/dbconfig');

var functions = {
addNew: async function(req,res)  {
    console.log("req")
    try{
    if((!req.body.nom)||(!req.body.prix)||(!req.body.code)||(!req.body.stock)||(!req.body.criteredemesure)){
    res.json({success: false, msg: 'Enter all fields'})


} 
else{
    var newproduct = product({
        nom: req.body.nom,
        prix: req.body.prix,
        code: req.body.code,
        stock: req.body.stock,
        criteredemesure:req.body.criteredemesure,



    });
    const savedProduct= await newproduct.save();
    res.json({success: true, msg: 'Successfully saved'});
}
} catch (err) {
res.json({success: false, msg: 'Failed to save'});
}
}}
module.exports = functions