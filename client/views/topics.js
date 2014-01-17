Template.topics.helpers({
  topics: function() {
    return Topics.find({},{sort:{createdAt:1}}); 
  },
  voted: function() {
    return _.contains(this.votes,Meteor.userId());
  },
  voteCount: function() {
   return (this.votes && this.votes.length) || 0; 
  },
  acceptingTopics: function(tmpl) {
    return tmpl.state === 'acceptingTopics'; 
  },
  voting: function(tmpl) {
    return tmpl.state === 'voting'; 
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
    var name = $.trim($('#new-topic #new-topic-name').val());
    var description = $.trim($('#new-topic #new-topic-description').val());
    if (name) {
      Topics.insert({name:name,description:description,unconference_id:tmpl.data._id});
    }
    $('#new-topic input, #new-topic textarea').val('');
  }
});