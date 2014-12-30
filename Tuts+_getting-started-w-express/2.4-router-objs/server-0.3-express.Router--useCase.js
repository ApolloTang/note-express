var express = require('express'),
    bodyParser = require('body-parser'),
    app        = express();

var   APIv1 = express.Router()  // api version 1
    , APIv2 = express.Router();  // api version 2

APIv1.get('/', function(req, res){
    res.send('response from api version 1');
});

APIv1.get('/', function(req, res){
    res.send('response from api version 2');
});

app.use('/api/v1', APIv1);
app.use('/api/v2', APIv2);

app.listen(3000);

