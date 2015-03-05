var express = require('express');
var app     = express();
var routes  = require('./routes/index')(app);
var port    = process.env.PORT || 3000;
var server = app.listen(port, function() {
    console.log('Listening on port ' + port);
});
module.exports = app;
