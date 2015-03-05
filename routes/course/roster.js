module.exports = {
    setup: function(router) {
        //Get the roster of a specific course
        router.get('/:id/roster', function(req,res) {
            var cid = req.params.id;

        });

        //Add a single user to the course's roster
        router.post('/:id/roster', function(req,res) {
            var cid = req.params.id;

        });

        //Delete a user from a course's roster
        router.delete('/:cid/roster/:uid', function(req,res) {
            var cid = req.params.cid;
            var uid = req.params.uid;

        });
    }
};
