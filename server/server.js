if (Meteor.isServer) {

  Meteor.startup(function () {
    AccountsEntry.config({
      signupCode: 's3cr3t',
      defaultProfile: {
        someDefault: 'default'
      }
    });
  });

  Meteor.publish('contacts', function(){
    return Contacts.find();
  });

  Meteor.publish('users', function(){
    return Meteor.users.find();
  });

  Meteor.publish('posts', function(){
    return Posts.find();
    // Meteor.publishWithRelations({
    //   handle: this,
    //   collection: Posts,
    //   mappings: [{
    //     key: 'authorId',
    //     collection: Meteor.users
    //   }, {
    //     reverse: true,
    //     key: 'postId',
    //     collection: Comments,
    //     filter: {approved: true},
    //     option: {
    //       limit: 10,
    //       sort: {created_ad: -1}
    //     },
    //     mappings: [{
    //       key: 'userId',
    //       collection: Meteor.users
    //     }]
    //   }]
    // });
  });

  Meteor.methods({
    sendMail: function(email) {

        Email.send({
          to: email,
          from: "Meteor Test ",
          subject: "Very Happy",
          text: 'Hi Luan , I am a tester of meteor'
        });
        return true
    }
  });

}