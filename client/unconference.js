Template.unconference.events({
  'click button' : function(evt) {
    if (_.contains(this.votes,Meteor.userId())) {
      Topics.update({_id:this._id},{$pull:{votes:Meteor.userId()}});
    }
    else {
      Topics.update({_id:this._id},{$addToSet:{votes:Meteor.userId()}});
    }
  }
});

Template.unconference.helpers({
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