var express = require('express');
var app = express();
var port = 3000;

app.get('/empdata',function(req,res)
{
    res.send({name:'sunil',location:'hyderabad',state:'Telangana',pincode:'500001'});
})

app.listen(port,function(err)
{
    console.log("server is running on port "+port)
})