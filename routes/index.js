var user   = require('user');
var course = require('course');

module.exports = function(app) {
    user.setup(app);
    course.setup(app);
};
