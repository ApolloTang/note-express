var express = require('express'),
    bodyParser = require('body-parser'),
    app        = express()
    , APIv1 = require('./api-v1')
    , APIv2 = require('./api-v2');

app.use('/api/v1', APIv1);
app.use('/api/v2', APIv2);

app.listen(3000);

