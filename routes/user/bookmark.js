//Bookmark API
module.exports = {
    setup: function(router) {
        //Create bookmark for current user
        router.post('/bookmark', function(req,res) {

        });

        //Get user's bookmarks for specific course
        router.get('/bookmark/course/:course_id', function(req,res) {
            var course_id = req.params.course_id;

        });

        //Get user's bookmarks for specific lecture of a course
        router.get('/bookmark/:course_id/lecture/:lecture_id', function(req,res) {
            var course_id = req.params.course_id;
            var lecture_id = reg.params.lecture_id;

        });

        //Delete specific bookmark
        router.delete('/bookmark/:bookmark_id', function(req,res) {
            var bookmark_id = req.params.bookmark_id;

        });

        //Edit specific bookmark
        router.put('/bookmark/:bookmark_id', function(req,res) {
            var bookmark_id = req.params.bookmark_id;

        });
    }
};
