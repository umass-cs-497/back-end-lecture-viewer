module.exports = {
    setup: function(app) {
        //Get the roster of a specific course
        app.get('/course/:id/roster', function(req,res) {
            var cid = req.params.id;

        });

        //Add a single user to the course's roster
        //NOTE: This will probably have to handle both adding a single user
        //      and adding a file full of users
        app.post('/course/:id/roster', function(req,res) {
            var cid = req.params.id;

        });

        //Delete a user from a course's roster
        app.delete('/course/:cid/roster/:uid', function(req,res) {
            var cid = req.params.cid;
            var uid = req.params.uid;
            
        });
    }
};
