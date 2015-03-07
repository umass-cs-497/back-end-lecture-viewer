//Attachment API
module.exports = {
    setup: function(router) {
        //Add an attachment to a lecture
        router.post('/:course_id/lecture/:lecture_id', function(req,res) {
            var course_id = req.params.course_id;
            var lecture_id = req.params.lecture_id;
            
        });

        //Delete an attachment from a lecture
        router.delete('/:course_id/lecture/:lecture_id/:attachment_id', function(req,res) {
            var course_id = req.params.course_id;
            var lecture_id = req.params.lecture_id;
            var attachment_id = req.params.attachment_id;

        });
    }
};
