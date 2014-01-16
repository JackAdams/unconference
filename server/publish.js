Meteor.publish('unconferences',function() {
  return Unconferences.find();
});

Meteor.publish('unconference',function(_id) {
  return [
    Unconferences.find({_id:_id}),
    Topics.find({unconference_id:_id})
  ];
});