//Comment API
module.exports = {
    setup: function(router) {
        //Get comments for specific lecture
        router.get('/:course_id/lecture/:lecture_id/comment', function(req,res) {

        });
        //Add new comment to specific lecture
        router.post('/:course_id/lecture/:lecture_id/comment', function(req,res) {

        });
        //Delete a specific comment
        router.delete('/:course_id/lecture/:lecture_id/comment/:comment_id', function(req,res) {

        });
        //Edit a specific comment
        router.put('/:course_id/lecture/:lecture_id/comment/:comment_id', function(req,res) {

        });
        //Reply to a specific comment
        router.post('/:course_id/lecture/:lecture_id/comment/:comment_id', function(req,res) {

        });
    }
};
