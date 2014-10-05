if (Meteor.isClient) {
  Meteor.subscribe("users");

  Template.dashboard_user.helpers({
    users: function() {
      return Meteor.users.find();
    }
  });
}