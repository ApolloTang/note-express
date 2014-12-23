var express = require('express'),
    bodyParser = require('body-parser'), // <-- npm install body-parser
    app = express();

// Middleware is any number of functions that are invoked by
// the Express.js routing layer before your final request handler
// is, and thus sits in the middle between a raw request and
// the final intended route.
// https://blog.safaribooksonline.com/2014/03/10/express-js-middleware-demystified/


// app.use is the function use to register middleware,


//**  third-party middleware
    app.use(bodyParser.urlencoded( {extended: false} )); // {extended: false}:: see https://github.com/senchalabs/connect
    // more 3rd-party middleware at
    // https://github.com/senchalabs/connect


//** custom middleware
    app.use(function (req, res, next){
        console.log("this will log on every request");
        next();
    });

//route function
    app.get('/route', function(req, res){
        res.send('this is a route');
    });


// built-in middleware
    app.use(express.static('./public'));
    // use for static file like stylesheet or images to send to client


app.listen(3000);



// localhost:3000/route
// localhost:3000/file.txt
