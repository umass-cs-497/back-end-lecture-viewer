var express    = require('express');
var devlog     = require('morgan');
var bodyParser = require('body-parser');
var app        = express();
var port       = process.env.PORT || 3000;
var connectTimeout = require('connect-timeout');

var timeout = connectTimeout({ time: 1000 });

app.use(timeout); // you can set a global timeout value

//Tell node to interpret post data as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Activate path request logging in console
app.use(devlog('dev'));

//Route to user and course
app.use('/user', require('./routes/user/index'));
app.use('/course', require('./routes/course/index'));

var server = app.listen(port, function() {
    console.log('Listening on port ' + port);
});

module.exports = app;
