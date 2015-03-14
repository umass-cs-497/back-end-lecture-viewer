//Bookmark API
module.exports = {
    setup: function(router) {

        /*-----MOCK DATA-----*/
        var mock_bid = 456342;
        /*-----MOCK DATA-----*/

        //Create bookmark for current user
        router.post('/bookmark', function(req,res) {
            if(req.body.course_id && req.body.lecture_id && req.body.label && req.body.time) {
                res.send({'status': 'success',
                    'data' : {
                        'bookmark_id': mock_bid
                    }
                });
            }
            else {
                res.send({'status': 'fail',
                    'data': {
                        'title': 'Incorrect parameters'
                    }
                });
            }
        });

        //Get user's bookmarks for specific course
        router.get('/bookmark/course/:course_id', function(req,res) {

        });

        //Get user's bookmarks for specific lecture of a course
        router.get('/bookmark/:course_id/lecture/:lecture_id', function(req,res) {

        });

        //Delete specific bookmark
        router.delete('/bookmark/:bookmark_id', function(req,res) {

        });

        //Edit specific bookmark
        router.put('/bookmark/:bookmark_id', function(req,res) {

        });
    }
};
