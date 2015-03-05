//Notification API
module.exports = {
    setup: function(router) {
        //Get notifications of current user
        router.get('/notification/', function(req,res) {

        });

        //Mark notification as read
        router.put('/notification/:notification_id', function(req,res) {
            var notification_id = req.params.notification_id;

        });
    }
};
