
var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

app.get('*',function (req, res) {
        res.redirect('/');
});

var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("listening at http:/localhost/%s:%s", host, port)

});
