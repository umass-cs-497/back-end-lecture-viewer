var express    = require('express');
var devlog     = require('morgan');
var bodyParser = require('body-parser');
var app        = express();
var port       = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(devlog('dev'));

app.use('/user', require('./routes/user/index'));
app.use('/course', require('./routes/course/index'));

var server = app.listen(port, function() {
    console.log('Listening on port ' + port);
});

module.exports = app;
