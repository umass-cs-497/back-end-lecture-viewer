var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Schema definition for users
var userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  password: String,
  username: String,
  name: {
    first: String,
    last: String
  },
  role: String,
  // list of references to registered courses, element should be ObjectIds in Course collection.
  courses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }],
  notifications: [],
  bookmarks: [{
    title: String,
    url: String
  }]
});

/*
  Useful methods to access the User database.
  For getter methods, callback should in the form function(error, returned_data).
  For setter methods, callback should in the form function(error, affected_documents).
 */

/*
  Method to add a bookmark to the user account with given email.
 */
userSchema.statics.addBookmarkById = function(id, newBookmark, callback) {
  this.findByIdAndUpdate(
      id,
      {$push: {bookmarks: newBookmark}},
      callback
  );
};

/*
  Method to add course to student account by email.
 */
userSchema.statics.addCourseById = function(id, courseId, callback) {
  this.findById(id, function(err, user) {
    if (err)
      callback(err);
    else if (!user)
      callback("email does not exist");
    else {
      console.log(user);
      console.log(user.courses);
      user.courses.push(courseId);
      callback(undefined, user);
    }
  });
};

/*
  Method to add a notification to the user account with given email.
 */
userSchema.statics.addNotificationById = function(id, newNotification, callback) {
  this.findByIdAndUpdate(
      id,
      {$push: {notifications: newNotification}},
      callback
  );
};

/*
  Method to create a user with the given email, password, username and role.
 */
userSchema.statics.createUser = function(email, password, username, role, callback) {
  var userModel = this;
  userModel.findOne({email: email}, function(err, user) {
    if (err)
      callback(err);
    else if (user) {
      callback("user with email " + email + " already exists.");
    }
    else {
      userModel.create({
        email: email,
        password: password,
        username: username,
        role: role
      }, callback);
    }
  });
};

/*
  Method to delete user from database by email
 */
userSchema.statics.deleteUserById = function(id, callback) {
  var userModel = this;
  userModel.findByIdAndRemove(id, function(err, user) {
    if (err) {
      callback(err);
    }
    else {
      callback(undefined, user);
    }
  });
};

/*
  Method to drop the whole user collection.
  Just for testing. No need to be listed in public API.
 */
userSchema.statics.dropUserDatabase = function(callback) {
  this.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("user database dropped");
    }
    callback();
  });
};

/*
  Method to get a user's bookmarks by user's email.
 */
userSchema.statics.getBookmarksById = function(id, callback) {
  this.findOne({_id: id}, function(err, user) {
    if (err) {
      callback(err);
    }
    else if (!user) {
      callback("email does not exist.");
    }
    else {
      callback(undefined, user.bookmarks);
    }
  });
};

/*
  Method to get a user's registered courses by user's email.
 */
userSchema.statics.getCoursesById = function(id, callback) {
  this.findById(id)
      .populate('courses')
      .exec(function(err, user) {
        if (err) {
          callback(err);
        }
        else if (!user) {
          callback("email does not exist");
        }
        else {
          callback(undefined, user.courses);
        }
      });
};

/*
  Method to get user's notifications by user's email.
 */
userSchema.statics.getAllNotificationsById = function(id, callback) {
  this.findById(id, function(err, user) {
    if (err) {
      callback(err);
    }
    else if (!user) {
      callback("email does not exist.");
    }
    else {
      callback(undefined, user.notifications);
    }
  });
};

/*
  Method to get user's role (student, instructor,...) by user's email.
 */
userSchema.statics.getUserRoleById = function(id, callback) {
  this.findById(id, function(err, user) {
    if (err) {
      callback(err);
    }
    else if (!user) {
      callback('email does not exist.');
    }
    else {
      callback(undefined, user.role);
    }
  });
};

/*
  Method to get the whole user's document in the database by objectId.
 */
userSchema.statics.getUserById = function(id, callback) {
  this.findById(id, function(err, user) {
    if (err)
      callback(err);
    else if (!user) {
      callback("userID does not exist");
    }
    else {
      callback(undefined, user);
    }
  });
};

/*
  Method to change user first and last name.
 */
userSchema.statics.setNameById = function(id, firstName, lastName, callback) {
  this.findByIdAndUpdate(
      id,
      {$set: {name : {first: firstName, last: lastName}}},
      callback
  );
};

/*
  Method to update username.
 */
userSchema.statics.setUsernameById = function(id, newUsername, callback) {
  this.findByIdAndUpdate(
      id,
      {$set: {username : newUsername}},
      callback
  );
};

var User = mongoose.model('User', userSchema);

exports.User = User;

