var express = require('express');
var router = express.Router();

//Add module routes
require('./roster').setup(router);
require('./lecture').setup(router);

//Create a course
router.post('/', function(req,res) {

});

//Get course
router.get('/:course_id', function(req,res) {
    var course_id = req.params.course_id;

    console.log(course_id);
});

//Edit course
router.put('/:course_id', function(req,res) {
    var course_id = req.params.course_id;

});

//Delete course
router.delete('/:course_id', function(req,res) {
    var course_id = req.params.course_id;

});

module.exports = router;
