Unconferences = new Meteor.Collection('unconferences');

Unconferences.allow({
  insert: function(userId,doc) { return true; },
  update: function(userId,doc, fields, modifier) { return true; },
  remove: function(userId,doc) { return true; }
});