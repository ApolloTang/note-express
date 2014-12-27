var express = require('express'),
    bodyParser = require('body-parser'),
    app        = express();


// Router object contain the following in one place :
//      1. use
//      2. param
//      3. verb/all
//      4. route

var myRouter = express.Router();


myRouter.use(function(req, res, next) {
    console.log('router specific middleware');
    next();
});

myRouter.get('/', function(req, res){
    res.send('router home route');
});

myRouter.route('/test').get(function(req, res){
    res.send('router test route');
});

app.use('/api', myRouter);

// localhost:3000/api/
// localhost:3000/api/test
                  //^^^^------------  Note that express.Router()
                  //                       let you prepend your url path


