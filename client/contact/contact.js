if (Meteor.isClient) {
  Contacts = new Meteor.Collection('contacts');
  Template.contact.events({
    'click #contact_submit': function(event, tpl){
      var email = tpl.find("input[name='email']").value,
          comment = tpl.find("textarea[name='comment']").value;
          console.log(email + "----" + comment);
      Contacts.insert({email: email, comment: comment}, function(error){
        if (error) {
          tpl.$('body').find('#flash_messages strong.mesg').html(error);
        }else {
          console.log('successful');
          tpl.$('body').find('#flash_messages strong.mesg').html("send messages successful!");
        }
      });
      return false;
    }
  });
}