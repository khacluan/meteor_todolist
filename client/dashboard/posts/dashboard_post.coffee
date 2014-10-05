Deps.autorun ->
  Meteor.subscribe('posts')

Template.dashboardPost.helpers
  posts: ->
    return Posts.find()

  authorFor: (id) ->
    return Meteor.users.findOne({_id: id}).emails[0].address