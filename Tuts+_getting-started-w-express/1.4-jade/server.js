var express = require('express'),
    app = express();

app.get('/', function(req, res){
    // res.send('hello world');
    res.render('index.jade', {
        title: "hello express and jade"
    });
}).listen(3000);

// , function(){
//     console.log("listening on port 3000");
// });

