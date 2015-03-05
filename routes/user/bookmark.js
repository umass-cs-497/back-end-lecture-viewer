module.exports = {
    setup: function(router) {
        //Create bookmark for current user
        router.post('/bookmark', function(req,res) {

        });

        //Get user's bookmarks for specific course
        router.get('/bookmark/course/:id', function(req,res) {
            var cid = req.params.id;

        });

        //Get user's bookmarks for specific lecture of a course
        router.get('/bookmark/:cid/lecture/:lid', function(req,res) {
            var cid = req.params.cid;
            var lid = reg.params.lid;

        });

        //Delete specific bookmark
        router.delete('/bookmark/:id', function(req,res) {
            var bid = req.params.id;

        });

        //Edit specific bookmark
        router.put('/bookmark/:id', function(req,res) {
            var bid = req.params.id;
            
        });
    }
};
