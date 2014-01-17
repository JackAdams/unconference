Template.home.helpers({
  unconferences: function() {
    return Unconferences.find({},{sort:{createdAt:1}}); 
  }
});

Template.home.events({
  'submit #new-unconference' : function(evt) {
    evt.preventDefault();
    var name = $.trim($('#new-unconference #new-unconference-name').val());
    var description = $.trim($('#new-unconference #new-unconference-description').val());
    if (name) {
      Unconferences.insert({name:name,description:description});
    }
    $('#new-unconference input, #new-unconference textarea').val('');
  }
});