if Meteor.isClient
  Meteor.subscribe('users')

  Template.dashboardUser.helpers
    users: ->
      Meteor.users.find()