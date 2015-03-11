/*-------MOCK DATA------*/
var mock_notifications = [
            {
                "type" : "added to course",
                "course_name" : "CS187 Data Structures",
                "course_id" : "4cdfb11e1f3c000000007822",
                "date" : "03/02/2015 01:28:22"
            },
            {
                "type" : "new lecture",
                "course_name" : "CS187 Data Structures",
                "course_id" : "4cdfb11e1f3c000000007822",
                "lecture_name" : "Lecture 5: Can we really trust arrays?",
                "lecture_id" : "8dfaa22e1f3c000000003312",
                "date" : "03/01/2015 11:21:12"
            },
            {
                "type" : "reply",
                "course_name" : "CS187 Data Structures",
                "course_id" : "4cdfb11e1f3c000000007822",
                "lecture_name" : "Lecture 5: Can we really trust arrays?",
                "lecture_id" : "8dfaa22e1f3c000000003312",
                "comment" : "What's an array?",
                "comment_id" : "8dfaa22eff3c242000003312",
                "reply" : "\*facepalm\* its soo simple dude.",
                "replier_name" : "That Guy",
                "replier_id" : "8dfaa22e1f3c242000003312",
                "date" : "03/02/2015 01:28:22"
            }
        ];
/*-------MOCK DATA------*/

//Notification API
module.exports = {
    setup: function(router) {
        //Get notifications of current user
        router.get('/notification/', function(req,res) {
            res.status(200).send({'status': 'success',
                'data': {
                    'notifications': mock_notifications
                }
            });
        });

        //Mark notification as read
        router.put('/notification/:notification_id', function(req,res) {
            var notification_id = req.params.notification_id;

            //Mark notification as read in database

            res.status(200).send({'status': 'success', 'data': {}});
        });
    }
};
