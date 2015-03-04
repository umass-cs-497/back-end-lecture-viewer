var express = require('express');
var app     = express();

var uidregex = ""; // Need a regular expression to match all potential user id's (uids)
var cidregex = ""; // and one for course id's (cids)
var nidregex = ""; // and one for notifiction id's (nids)
var bidregex = ""; // and one for bookmark id's (bids)

app.use('/user'              , require('./routes/user/user'));
app.use('/user/notficiation' , require('./routes/user/notification'));
app.use('/user/bookmark'     , require('./routes/user/bookmark'));     

app.use('/course'            , require('./routes/course/course'));

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});


module.exports = app;
