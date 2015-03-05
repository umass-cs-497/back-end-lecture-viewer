var user          = require('./user/index');
var bookmark      = require('./user/bookmark');
var notification  = require('./user/notification');
var course        = require('./course/index');
var roster        = require('./course/roster');

module.exports = function(app) {
    bookmark.setup(app);
    notification.setup(app);
    user.setup(app);
    roster.setup(app);
    course.setup(app);
};
