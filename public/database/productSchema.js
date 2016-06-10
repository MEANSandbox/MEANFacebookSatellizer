var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema  =  new Schema({
	product_name : 	{ type: String,required: [true, 'Name Must be filled']},	
	product_description : 	String,										
});
 module.exports = mongoose.model('productSchema',productSchema);