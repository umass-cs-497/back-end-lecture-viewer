module.exports = {
    setup: function(app) {
        //Create an account
        app.post('/user', function(req,res) {
            
        });

        //Get logged in user info
        app.get('/user', function(req,res) {
            
        });

        //Get user
        app.get('/user/:id', function(req,res) {
            var uid = req.params.id;
            
        });

        //Edit user profile
        app.put('/user/:id', function(req,res) {
            var uid = req.params.id;
            
        });

        //Delete user
        app.delete('/user/:id', function(req,res) {
            var uid = req.params.id;
            
        });
    }
};

