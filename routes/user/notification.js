module.exports = {
    setup: function(app) {
        //Get notifications of current user
        router.get('/user/notification/', function(req,res) {
            
        });

        //Mark notification as read
        router.put('/user/notification/:id', function(req,res) {
            var nid = req.params.id;
            
        });
    }
};
