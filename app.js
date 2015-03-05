var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;

app.use('/user', require('./routes/user/index'));
app.use('/course', require('./routes/course/index'));

var server = app.listen(port, function() {
    console.log('Listening on port ' + port);
});

module.exports = app;
