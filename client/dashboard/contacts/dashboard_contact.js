Deps.autorun(function() {
  Meteor.subscribe('contacts');
});

Template.dashboard_contact.helpers({
  contacts: function() {
    return Contacts.find();
  }
});

Template.dashboard_contact.events({
  'click .action-delete': function (event) {
    var id = $(event.currentTarget).data('id');
    if (id && Meteor.user()) {
      Contacts.remove({_id: id}, function(err){
        console.log(err);
      });
    }
  },

  'click .action-reply': function (event) {
    var email = $(event.currentTarget).closest('tr').find('td.email').html();
    $(event.currentTarget).button('loading');
    if (email != null && Meteor.user()) {
      Meteor.call('sendMail', email, function(err, result){
        if (result) {
          var id = $(event.currentTarget).data('id');
          Contacts.update(id, {$set: {is_reply: true}});
        } else {

        }
      });
    }

  }

});