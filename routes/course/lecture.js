//Lecture API
module.exports = {
    setup: function(router) {
        //Add a lecture to a course
        router.post('/:course_id/lecture', function(req,res) {
            var course_id = req.params.course_id;

        });

        //Get a specific lecture
        router.get('/:course_id/lecture/:lecture_id', function(req,res) {
            var course_id = req.params.course_id;
            var lecture_id = req.params.lecture_id;

            res.send(course_id + " " + lecture_id);
        });

        //Edit a specific lecture
        router.put('/:course_id/lecture/:lecture_id', function(req,res) {
            var course_id = req.params.course_id;
            var lecture_id = req.params.lecture_id;

        });

        //Delete a user from a course's roster
        router.delete('/:course_id/lecture/:lecture_id', function(req,res) {
            var course_id = req.params.course_id;
            var lecture_id = req.params.lecture_id;

        });
    }
};
