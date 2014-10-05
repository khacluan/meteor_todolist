Deps.autorun ->
  Meteor.subscribe('contacts')

Template.dashboardContact.helpers
  contacts: ->
    Contacts.find()

Template.dashboardContact.events
  'click .action-delete': (event) ->
    id = $(event.currentTarget).data('id')
    if id and Meteor.user()
      Contacts.remove({_id: id}, (error) -> console.log error)

  'click .action-reply': (event) ->
    email = $(event.currentTarget).closest('tr').find('td.email').html()
    $(event.currentTarget).button 'loading'
    if email != null and Meteor.user()
      Meteor.call 'sendMail', email, (error, result) ->
        if result
          id = $(event.currentTarget).data('id')
          Contacts.update(id, {$set: {is_reply: true}})
        else
          console.log error
