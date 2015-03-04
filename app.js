var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;

app.use('/user'              , require('./routes/user/user'));
app.use('/user/notficiation' , require('./routes/user/notification'));
app.use('/user/bookmark'     , require('./routes/user/bookmark'));     

app.use('/course'            , require('./routes/course/course'));
app.use('/course/roster'     , require('./routes/course/roster'));

var server = app.listen(port, function() {
    console.log('Listening on port ' + port);
});

module.exports = app;
