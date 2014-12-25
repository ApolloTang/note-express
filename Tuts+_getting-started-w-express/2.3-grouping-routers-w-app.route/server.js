var express = require('express'),
    bodyParser = require('body-parser'), // <-- npm install body-parser
    app = express();

app.use(bodyParser.urlencoded()); // <--

var names = [];

var log = function(req, res, next){
        console.log( names );
        next();
    }


app.route('/')
    .all(
        function(req, res, next){
            // will run for all CRUD verb
            console.log('from ALL');
            next(); // without this app.get() and app.post() after will not be executed
        }
    )
    .get(
      log
        , function(req, res){
            res.render('index.jade', { names: names });
        }
    )
    .post(
        function(req, res){
            names.push(req.body.name);
            res.redirect('/');
        }
    );

// The app.route() method above keep your code for home route "/" dry


/*
 * app.all('/', function(req, res, next){
 *     // will run for all CRUD verb
 *     console.log('from ALL');
 *     next(); // without this app.get() and app.post() after will not be executed
 * })
 *
 *
 * // each verm method can take multiple callback, just call next() at the end
 * // of each method so next callback will be execute
 *
 * app.get('/'
 *     , log  // <-- moving the callback offline
 *     , function(req, res){
 *         res.render('index.jade', {
 *         names: names
 *     });
 * })
 *
 * app.post('/', function(req, res){
 *     names.push(req.body.name);
 *     res.redirect('/');
 * });
 */

app.listen(3000);
