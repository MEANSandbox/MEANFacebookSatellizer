var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var configURL = require('./public/database/config.js');
var productSchema = require('./public/database/productSchema.js');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
mongoose.connect(configURL.URL,options);
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:')); 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
console.log('db connection established');
});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function(req, res) {
    res.json({"name":"dimitri","password":"dimitri"})
});

app.get('/test',function(req,res){
    res.json({"name":"dimitri","password":"dimitri","message":"test 1 API Endpoint"})
})
app.post('/add',function(req,res){
    var ProductModel = productSchema();
    ProductModel.product_name = req.body.productData.product_name;
    ProductModel.product_description = req.body.productData.product_description;
    ProductModel.save(function(err,response){
        if(err) {
            if(err.errors.product_name) {
                res.status(400).json({"message":"please add product name ",status : false})
            } else {
                res.status(400).json({"message":"unable to add product ",status : false})
            }
        } else {
            res.status(200).json({"message":"successfully add product",status : true,"response" :response })
        }
    })
})
app.get('/fetch',function(req,res){
    productSchema.find({},function(err,response){
        if(err) {
            res.status(400).json({"message":"unable to fetch product list",status:false})
        } else {
         res.status(200).json({"message":"data is fetched",status:true,"response":response})   
        }
        
    })
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


