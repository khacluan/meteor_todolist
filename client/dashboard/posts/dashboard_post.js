
Deps.autorun(function() {
  Meteor.subscribe('posts');
});

Template.dashboard_post.helpers({
  posts: function() {
    return Posts.find();
  },

  authorFor: function(id) {
    return Meteor.users.findOne({ _id: id}).emails[0].address;
  }
});