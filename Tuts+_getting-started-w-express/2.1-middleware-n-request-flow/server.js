var express = require('express'),
    bodyParser = require('body-parser'), // <-- npm install body-parser
    app = express();

// Middleware is any number of functions that are invoked by
// the Express.js routing layer before your final request handler
// is, and thus sits in the middle between a raw request and
// the final intended route.
// https://blog.safaribooksonline.com/2014/03/10/express-js-middleware-demystified/


// app.use is the function use to register middleware,
// here it is is registering bodyParser middleware.
app.use(bodyParser.urlencoded());

var names = [];

var log = function(req, res, next){
        console.log( names );
        next();
    }

app.all('/', function(req, res, next){
    // will run for all CRUD verb
    console.log('from ALL');
    next(); // without this app.get() and app.post() after will not be executed
})


// each verm method can take multiple callback, just call next() at the end
// of each method so next callback will be execute

app.get('/'
    , log  // <-- moving the callback offline
    , function(req, res){
        res.render('index.jade', {
        names: names
    });
})

app.post('/', function(req, res){
    names.push(req.body.name);
    res.redirect('/');
});

app.listen(3000);
