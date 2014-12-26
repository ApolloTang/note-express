var express = require('express'),
    bodyParser = require('body-parser'),
    app        = express();


// Router object contain the following in one place :
//      1. use
//      2. param
//      3. verb/all
//      4. route

var router = express.Router();


router.use(function(req, res, next) {
    console.log('router specific middleware');
    next();
});

router.get('/', function(req, res){
    res.send('router home route');
});

router.route('/test').get(function(req, res){
    res.send('router test route');
});

app.use('/api', router);

// localhost:3000/api/
// localhost:3000/api/test


/*
 * // 1. "use" is for middleware
 *
 *     //** custom middleware
 *         app.use(function (req, res, next){
 *             console.log("this will log on every request");
 *             next();
 *         });
 *
 * // 2. "param" is a middleware to parse parameter
 *
 *     app.param('myParameter', function( req, res, next , yourParameter ){
 *               // ^-----  the first argument for app.param() map to parameter you want
 *               //         to match in the route bellow
 *               //         and its value is availble as the 4th argument in callback (as "yourParameter")
 *
 *         req.someVar = yourParameter;
 *         req.someVar2 = yourParameter[0].toUpperCase()  // Capitalize first character
 *                      + yourParameter.substring(1);     // Concated all charecters after first charecter
 *         next();
 *     });
 *
 * // 3. "verb" method
 *
 *     app.all('/', function(req, res, next){
 *         // will run for all CRUD verb
 *         console.log('from ALL');
 *         next(); // without this app.get() and app.post() after will not be executed
 *     });
 *
 *     app.get('/name/:myParameter', function(req,res){
 *         res.send( 'req.someVar2 = ' + req.someVar2 + '</br>');
 *     });
 *
 * // 4. route
 *
 *      app.route('/using-route/')
 *         .all(
 *             function(req, res, next){
 *                 // will run for all CRUD verb
 *                 console.log('from ALL');
 *                 next(); // without this app.get() and app.post() after will not be executed
 *             }
 *         )
 *         .get(
 *             function(req, res){
 *                 res.send('using route');
 *             }
 *         );
 */

    app.listen(3000);
