if Meteor.isServer
  Meteor.startup ->
    AccountsEntry.config
      signupCode: 's3cr3t',
      defaultProfile:
        someDefault: 'default'

  Meteor.publish 'contacts', ->
    Contacts.find()

  Meteor.publish 'users', ->
    Meteor.users.find()

  Meteor.publish 'posts', ->
    Posts.find()

  Meteor.publish 'categories', ->
    Categories.find()

  Meteor.methods
    sendMail: (email) ->
      Email.send
        to: email
        from: 'Meteor Dashboard Tester'
        subject: 'Meteor build application.'
        text: 'Welcome to build app with meteor js framework.'