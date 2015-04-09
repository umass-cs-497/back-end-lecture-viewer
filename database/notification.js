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