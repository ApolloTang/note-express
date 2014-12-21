var express = require('express'),
    app = express();



// method to work with express configuration

    // set and get application configuration's value
    app.set();
    app.get(); //  <-- this the same method as the verb method "get()", but differ in signature.

    // setting a configuration
    app.enable();
    app.disable();

    // return boolean (check if a value is set or not)
    app.enabled();
    app.disabled();


    // Various use case::

        // [1] enviroment

            app.set('env', 'development');  // process.env.MODE_ENV = 'development';
                                            // process.env.MODE_ENV = 'production';

        // [2] using reverse proxy
            // advance topic see:
            //  http://stackoverflow.com/questions/224664/difference-between-proxy-server-and-reverse-proxy-server
            app.enable('turst proxy');

        // [3] Changes the default callback name of ?callback=
            app.set('jsonp callback name', 'cb')// ?

        // [4] json replacer
            // filter out what you want to sent to client,
            app.set('json replacer', function( attr, val ){
                if ( attr === 'passwordHash') {
                    return undefined;  // don't want to return passwordHash
                }
                return val;
            })
            app.get('/user_info', function (req, res){
                // get user data
                res.json(userObj_from_database) // JSON.stringify
            }

        // [5] case sensitive routhing where (uppercase and lower case matter)
        //  "/hello" !== "/Hello"
            app.enable('case sensitive routing'); // disble by default

        // [6] strict routing
        // "/hello" === "/hello/"
            app.enable("strict routing"); // enable by default

        // [7] cache view
            // I think this will preprocesss the template
            app.enable('view cache');


        // [8] specify template engine
            app.set('view engine', 'ejs');
            // app.set('view engine', 'jade');
            app.get('/' , function(req, res){
                // res.render('index.ejs', { // <-- no need to specify extension, because you have set view engine to 'ejs'
                res.render('index', {
                    names: names
                });
            })

        // [9] specify template directory
            app.set('views', 'template');
            // now will look for template in directory "template" instead of directory "views"

        // [10]
            app.disable('x-powered-by');
            // by default express will send an header "x-powered-by: express"
            // if you don't want this advertisement you can disable it.

        // [11] finally you can add custom configure if you want


app.listen(3000);
