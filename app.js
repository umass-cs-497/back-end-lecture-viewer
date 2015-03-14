var express    = require('express');
var devlog     = require('morgan');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var app        = express();
var port       = process.env.PORT || 3000;

//Connect to mongodb on digitalocean droplet
mongoose.connect('mongodb: //root:cs497s@104.131.30.37:27017');
mongoose.connection.on('error', function() {
    console.log('Error: Database not found');
});

//Tell node to interpret post data as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(devlog('dev'));

app.use('/user', require('./routes/user/index'));
app.use('/course', require('./routes/course/index'));

var server = app.listen(port, function() {
    console.log('Listening on port ' + port);
});

module.exports = app;
