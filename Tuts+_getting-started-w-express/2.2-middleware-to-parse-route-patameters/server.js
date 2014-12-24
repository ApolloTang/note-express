var express = require('express'),
    app = express();


//** Middleware

    // note that the middleware app.param() must be defined before routes
    // this is becaue the request are process from top to bottom
    app.param('myParameter', function( req, res, next , yourParameter ){
              // ^-----  the first argument for app.param() map to parameter you want
              //         to match in the route bellow
              //         and its value is availble as the 4th argument in callback (as "yourParameter")

        req.someVar = yourParameter;

        req.someVar2 = yourParameter[0].toUpperCase()  // Capitalize first character
                     + yourParameter.substring(1);     // Concated all charecters after first charecter

        console.log('yourParameter = ', yourParameter);
        console.log('req.someVar = ', req.someVar);
        console.log('req.someVar2 = ', req.someVar2);

        next();
    })

//** routes

    app.get('/name/:myParameter', function(req,res){
                  // ^------ this variable ':myParameter' is the route parameter
                  //         it is accessible under req.params in route callback.
                  //         it is also accessible in middleware app.param()
        res.send(
             'req.param.myParameter = '  + req.params.myParameter  + '</br>' +

             // next two variable were defined in middle ware app.parm()
             'req.someVar = '  + req.someVar  + '</br>' +
             'req.someVar2 = ' + req.someVar2 + '</br>'
            );
    });

    app.listen(3000);

// localhost:3000/name/apollo


