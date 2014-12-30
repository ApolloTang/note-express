var APIv1 = require('express').Router();

APIv1.get('/', function(req, res){
    res.send('response from api version 1');
});

module.exports = APIv1;

