var APIv2 = require('express').Router();

APIv2.get('/', function(req, res){
    res.send('response from api version 2');
});

module.exports = APIv2;

