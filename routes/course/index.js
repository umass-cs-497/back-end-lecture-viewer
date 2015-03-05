module.exports = {
    setup: function(app) {
        //Create a course
        app.post('/course', function(req,res) {
            
        });

        //Get course
        app.get('/course/:id', function(req,res) {
            var cid = req.params.id;

            console.log(cid);
        });

        //Edit course
        app.put('/course/:id', function(req,res) {
            var cid = req.params.id;
            
        });

        //Delete course
        app.delete('/course/:id', function(req,res) {
            var cid = req.params.id;
            
        });
    }
};
