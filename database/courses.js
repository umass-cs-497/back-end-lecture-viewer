var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Schema definition for courses
var courseSchema = new Schema({
  courseNumber: String,
  courseSection: String,
  department: String,
  description: String,
  permission: Number,
  instructors: [{
    type: String,
    unique: true
  }],
  // list of references to lectures, elements should be ObjectIds in Lecture collection.
  lectures: [{
    type: Schema.Types.ObjectId,
    ref: 'Lecture'
  }],
  // list of references to registered students/instructors, elements should be ObjectIds in User collection.
  registeredUsers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  // list of all eligible emails to view the course's material (different from registeredUsers above.)
  emails: [String],
  semester: String,
  title: String
});

/*
  Methods to work with Course database.
  For getter methods, callback should be in the form function (err, data).
  For setter methods, callback should be in the form function (err, affected_documents).
 */

/*
 Method to add a list of eligible emails to the course.
 */
courseSchema.statics.addListOfEmailsById = function(courseId, emailList, callback) {
  this.findById(courseId, function(err, course) {
    if (err) {
      callback(err);
    }
    else if (!course) {
      callback("courseID does not exist");
    }
    else {
      for (var i in emailList) {
        course.emails.push(emailList[i]);
      }
      course.save(function(err) {
        if (err)
          callback(err);
        else
          callback(undefined, course);
      });
    }
  });
};

/*
 Method to add list of lectures to course.
 */
courseSchema.statics.addListOfLecturesById = function(courseId, lectureIdList, callback) {
  this.findById(courseId, function(err, course) {
    if (err) {
      callback(err);
    }
    else if (!course) {
      callback("courseID does not exist");
    }
    else {
      for (var i in lectureIdList) {
        course.lectures.push(lectureIdList[i]);
      }
      course.save(function(err) {
        if (err)
          callback(err);
        else
          callback(undefined, course);
      });
    }
  });
};

/*
  Method to add a list of  users to course.
 */
courseSchema.statics.addListOfUsersById = function(courseId, userIdList, callback) {
  this.findById(courseId, function(err, course) {
    if (err) {
      callback(err);
    }
    else if (!course) {
      callback("courseID does not exist");
    }
    else {
      for (var i in userIdList) {
        course.registeredUsers.push(userIdList[i]);
      }
      course.save(function(err) {
        if (err)
          callback(err);
        else
          callback(undefined, course);
      });
    }
  });
};

/*
  Method to create a course given basic info: semester, department (e.g, CMPSCI), course number(e.g, 497S).
 */
courseSchema.statics.createCourse = function(semester, department, courseNumber, callback) {
  var courseModel = this;
  courseModel.find({
    semester: semester,
    department: department,
    courseNumber: courseNumber
  }, function(err, course) {
    if (err) {
      callback(err);
    }
    else {
      courseModel.create({
        courseNumber: courseNumber,
        department: department,
        semester: semester
      }, callback);
    }
  })
};

/*
  Method to remove all eligible emails from the course.
 */
courseSchema.statics.deleteAllEmailsById = function(courseId, callback) {
  this.findById(courseId, function(err, course) {
    if (err) {
      callback(err);
    }
    else if (!course) {
      callback("courseID does not exist");
    }
    else {
      var length = course.emails.length;
      course.emails.splice(0, length);
      course.save(function(err) {
        if (err)
          callback(err);
        else
          callback(undefined, course);
      })
    }
  });
};

/*
 Method to remove all registered users from the course.
 */
courseSchema.statics.deleteAllLecturesById = function(courseId, callback) {
  this.findById(courseId, function(err, course) {
    if (err) {
      callback(err);
    }
    else if (!course) {
      callback("courseID does not exist");
    }
    else {
      var length = course.lectures.length;
      course.lectures.splice(0, length);
      course.save(function(err) {
        if (err)
          callback(err);
        else
          callback(undefined, course);
      })
    }
  });
};

/*
 Method to remove all registered users from the course.
 */
courseSchema.statics.deleteAllUsersById = function(courseId, callback) {
  this.findById(courseId, function(err, course) {
    if (err) {
      callback(err);
    }
    else if (!course) {
      callback("courseID does not exist");
    }
    else {
      var length = course.registeredUsers.length;
      course.registeredUsers.splice(0, length);
      course.save(function(err) {
        if (err)
          callback(err);
        else
          callback(undefined, course);
      })
    }
  });
};

/*
 * Deletes a course by id.
 */
courseSchema.statics.deleteCourseById = function(courseID, callback){
  var courseModel = this;
  courseModel.findByIdAndRemove(courseID,function(err, course){
    if(err){
      callback(err);
    }
    else{
      callback(undefined, course);
    }
  });
};

/*
 * Method that will drop the database of the courses.
 * Just for testing. No need to be listed in public API.
 */
courseSchema.statics.dropCoursesDatabase = function(callback) {
  this.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Course database dropped");
    }
    callback();
  });
};

/*
  Method to get course by courseId.
 */
courseSchema.statics.getCourseById = function(id, callback) {
  this.findById(id, function(err, course) {
    if (err) {
      callback(err);
    }
    else if (!course) {
      callback("courseID does not exist");
    }
    else {
      callback(undefined, course);
    }
  });
};

/*
 Method to get all eligible user emails by courseId.
 */
courseSchema.statics.getEligibleEmailsById = function(id, callback) {
  this.findById(id, function (err, course) {
    if (err) {
      callback(err);
    }
    else if (!course) {
      callback("courseID does not exist");
    }
    else {
      callback(undefined, course.emails);
    }
  });
};

/*
  Method to get all registered accounts by courseId.
 */
courseSchema.statics.getRegisteredUsersById = function(id, callback) {
  this.findById(id)
      .populate('registeredUsers')
      .exec(function(err, course) {
        if (err)
          callback(err);
        else if (!course)
          callback('courseID does not exist.');
        else
          callback(undefined, course.registeredUsers);
      })
};

var Course = mongoose.model('Course', courseSchema);

exports.Course = Course;
