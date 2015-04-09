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