Deps.autorun ->
  Meteor.subscribe('categories')

Template.dashboardCategory.helpers
  categories: ->
    Categories.find()