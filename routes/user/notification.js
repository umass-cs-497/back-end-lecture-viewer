module.exports = {
    setup: function(router) {
        //Get notifications of current user
        router.get('/notification/', function(req,res) {
            
        });

        //Mark notification as read
        router.put('/notification/:id', function(req,res) {
            var nid = req.params.id;
            
        });
    }
};
