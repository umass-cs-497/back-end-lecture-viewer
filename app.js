var express = require('express');
var app     = express();

app.use('/user'              , require('./routes/user/user'));
app.use('/user/notficiation' , require('./routes/user/notification'));
app.use('/user/bookmark'     , require('./routes/user/bookmark'));     

app.use('/course'            , require('./routes/course/course'));
app.use('/course/roster'     , require('./routes/course/roster'));

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});


module.exports = app;
