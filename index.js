var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

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


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


