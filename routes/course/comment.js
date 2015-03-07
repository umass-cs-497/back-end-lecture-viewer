//Comment API
module.exports = {
    setup: function(router) {
        //Get comments for specific lecture
        router.get('/:course_id/lecture/:lecture_id/comment', function(req,res) {
            var course_id = req.params.course_id;
            var lecture_id = req.params.lecture_id;

        });
        //Add new comment to specific lecture
        router.post('/:course_id/lecture/:lecture_id/comment', function(req,res) {
            var course_id = req.params.course_id;
            var lecture_id = req.params.lecture_id;

        });
        //Delete a specific comment
        router.delete('/:course_id/lecture/:lecture_id/comment/:comment_id', function(req,res) {
            var course_id = req.params.course_id;
            var lecture_id = req.params.lecture_id;
            var comment_id = req.params.comment_id;

        });
        //Edit a specific comment
        router.put('/:course_id/lecture/:lecture_id/comment/:comment_id', function(req,res) {
            var course_id = req.params.course_id;
            var lecture_id = req.params.lecture_id;
            var comment_id = req.params.comment_id;

        });
        //Reply to a specific comment
        router.post('/:course_id/lecture/:lecture_id/comment/:comment_id', function(req,res) {
            var course_id = req.params.course_id;
            var lecture_id = req.params.lecture_id;
            var comment_id = req.params.comment_id;

        });
    }
};
