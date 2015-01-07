// commonly use respond method:

// var express = require('express');
// var app = express();
var app = require('express')();

app.get('/', function(req, res){

    // res.status(200);
    // res.set(header, value);
    // res.get(header);
    //
    // res.cookie(name, value);
    // res.clearCookie(name);
    //
    // res.redirect(status, path);
    // res.send(status, text);
    // res.json(status, obj);
    // res.jsonp(status, obj);
    //
    // res.download(file);
    //
    // res.render(file, props, function(err, html){
    //     res.send(222, 'hello')
    // });


}).listen(3000);



