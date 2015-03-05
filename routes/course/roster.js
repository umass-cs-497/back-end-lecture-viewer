//Roster API
module.exports = {
    setup: function(router) {
        //Get the roster of a specific course
        router.get('/:course_id/roster', function(req,res) {
            var course_id = req.params.course_id;

        });

        //Add a single user to the course's roster
        router.post('/:course_id/roster', function(req,res) {
            var course_id = req.params.course_id;

        });

        //Delete a user from a course's roster
        router.delete('/:course_id/roster/:uid', function(req,res) {
            var course_id = req.params.course_id;
            var user_id = req.params.user_id;

        });
    }
};
