Template.topics.helpers({
  topics: function() {
   return Topics.find(); 
  },
  voted: function() {
    return _.contains(this.votes,Meteor.userId());
  },
  voteCount: function() {
   return (this.votes && this.votes.length) || 0; 
  }
});

Template.topics.events({
  'click button' : function(evt) {
    if (_.contains(this.votes,Meteor.userId())) {
      Topics.update({_id:this._id},{$pull:{votes:Meteor.userId()}});
    }
    else {
      Topics.update({_id:this._id},{$addToSet:{votes:Meteor.userId()}});
    }
  },
  'submit #new-topic' : function(evt,tmpl) {
    evt.preventDefault();
    var name = $('#new-topic input').val();
    if (name) {
      Topics.insert({name:name,unconference_id:tmpl.data._id});
    }
    $('#new-topic input').val('');
  }
});