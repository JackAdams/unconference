Unconferences = new Meteor.Collection('unconferences');

Unconferences.allow({
  insert: function(userId,doc) { return !!Meteor.userId(); },
  update: function(userId,doc, fields, modifier) { return userId === doc.user_id; },
  remove: function(userId,doc) { return userId === doc.user_id; }
});

Unconferences.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
  doc.user_id = userId;
  doc.state = 'acceptingTopics';
});