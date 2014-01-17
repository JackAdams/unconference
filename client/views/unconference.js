Template.unconference.helpers({
  userIsCreator: function() {
    return Meteor.userId() === this.user_id; 
  }
});
                              
Template.unconference_admin.helpers({
  unconferenceStates: function(tmpl) {
    var states = [
      {name:'Accepting topics',state:'acceptingTopics'},
      {name:'Voting',state:'voting'},
      {name:'Scheduling',state:'scheduling'}
    ];
    var states = _.map(states,function(state) {
      return (tmpl.state === state.state) ? _.extend(state,{selected:true}) : state;
    });
    return states;
  }
});

Template.unconference_admin.events({
  'click .unconference-state' : function(evt,tmpl) {
    Unconferences.update({_id:tmpl.data._id},{$set:{state:this.state}}); 
  }
});