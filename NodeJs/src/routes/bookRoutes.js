var express = require('express');
var bookRouter = express.Router();


var router = function()
{
    bookRouter.route('/')
        .get(function(req,res)
        {
            res.send(" this is books page")
        })

    bookRouter.route('/detail')
        .get(function(req,res)
        {
            res.send(" this is book detail page")
        })
    return bookRouter;
}

module.exports=router;