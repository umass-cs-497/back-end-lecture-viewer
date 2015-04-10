/**
 * Created by freddy on 3/16/15.
 */
var Lecture = require('./models/lecture');

/*
  Methods to work with Lecture database.
  For getter methods, callback should be in the form function(err, data).
 */

exports.getCommentsById = function(id, callback) {
  Lecture.findById(id)
      .populate('comments')
      .exec(function (err, lecture) {
        if (err)
          callback(err);
        else if (!lecture)
          callback("lectureID does not exist.");
        else
          callback(undefined, lecture.comments);
      });
};

exports.getLectureById = function(id, callback) {
  Lecture.findById(id, function(err, lecture) {
    if (err) {
      callback(err);
    }
    else if (!lecture) {
      callback("lectureID does not exist");
    }
    else {
      callback(undefined, lecture);
    }
  });
};

/*
 * setLEctureVisibility: sets the visibility of a lecture.
 */
 exports.setLectureVisibility = function(courseID, visibility, callback){
	Lecture.update(courseID,
		{$set:{visible: visibility}},
		callback
		);
}; 
/*
 * getLEctureVisibility: gets the visibility of a lecture
 */
exports.getLectureVisibility = function(courseID, callback){
	Lecture.findById(courseID, function(err, lecture){
		if(err){
			callback(err);
		}
		else if(!lecture){
			callback("Lecture not found");
		}
		else{
			callback(undefined,lecture.visible);
		}
	});
};