Template.home.helpers({
  unconferences: function() {
    return Unconferences.find({},{sort:{createdAt:1}}); 
  }
});

Template.home.events({
  'submit #new-unconference' : function(evt) {
    evt.preventDefault();
    var name = $('#new-unconference input').val();
    if (name) {
      Unconferences.insert({name:name});
    }
    $('#new-unconference input').val('');
  }
});