var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
 
// Static Middleware
app.use(express.static('public'))
   
app.get('/', function (req, res, next) {
    res.send('<p>Hi!</p>');
})
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
