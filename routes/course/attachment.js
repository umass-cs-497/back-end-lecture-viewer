//Attachment API
module.exports = {
    setup: function(router) {
        //Add an attachment to a lecture
        router.post('/:course_id/lecture/:lecture_id', function(req,res) {
            
        });

        //Delete an attachment from a lecture
        router.delete('/:course_id/lecture/:lecture_id/:attachment_id', function(req,res) {

        });
    }
};
