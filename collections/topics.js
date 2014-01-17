Topics = new Meteor.Collection('topics');

Topics.allow({
  insert: function(userId,doc) { return !!Meteor.userId(); },
  update: function(userId,doc, fields, modifier) { return changeTopicPermissionCheck(userId,doc,fields); },
  remove: function(userId,doc) { return userId === doc.user_id; }
});

Topics.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
  doc.user_id = Meteor.userId();
});

changeTopicPermissionCheck = function(userId,doc,fields) {
  if (!_.without(fields,'votes').length) {
    return !!Meteor.userId();
  }
  else {
    return doc.user_id === Meteor.userId(); 
  }
}