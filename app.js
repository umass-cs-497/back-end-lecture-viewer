var express = require('express');
var app     = express();

app.use('/user'              , require('./user'));
app.use('/user/notficiation' , require('./notification'));
app.use('/user/bookmark'     , require('./bookmark'));     
app.use('/course'            , require('./course'));

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});


module.exports = app;
