Topics = new Meteor.Collection('topics');

Topics.allow({
  insert: function(userId,doc) { return true; },
  update: function(userId,doc, fields, modifier) { return true; },
  remove: function(userId,doc) { return true; }
});

Topics.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
});