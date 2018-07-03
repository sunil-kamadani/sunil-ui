var express = require('express');
var ejs = require('ejs');
var commanRouter = express.Router();
var bookRouter = require('./src/routes/bookRoutes')();

var app = express();
var port = 3000;

app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine',"ejs");



commanRouter.route('/home')
            .get(function(req,res)
            {
                res.render('index',{title:'Express+EJS'});
            })




app.use('/api',commanRouter);
app.use('/books',bookRouter);

app.listen(port,function(err)
{
    console.log("server is running on port "+port)
})