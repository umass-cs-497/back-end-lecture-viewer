//Lecture API
module.exports = {
    setup: function(router) {
        //Add a lecture to a course
        router.post('/:course_id/lecture', function(req,res) {

        });

        //Get a specific lecture
        router.get('/:course_id/lecture/:lecture_id', function(req,res) {

        });

        //Edit a specific lecture
        router.put('/:course_id/lecture/:lecture_id', function(req,res) {

        });

        //Delete a user from a course's roster
        router.delete('/:course_id/lecture/:lecture_id', function(req,res) {

        });
    }
};
