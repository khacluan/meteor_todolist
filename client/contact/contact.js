if (Meteor.isClient) {
  Template.contact.events({
    'click #contact_submit': function(event, tpl){
      var email = tpl.find("input[name='email']").value,
          comment = tpl.find("textarea[name='comment']").value,
          flash_dom = tpl.$('form').closest('#main').find('#flash_messages strong.mesg');
      Contacts.insert({email: email, comment: comment}, function(error){
        if (error) {
          tpl.$('body').find('#flash_messages strong.mesg').html(error);
        }else {
          flash_dom.closest('#flash_messages').removeClass('hidden').addClass('alert-success');
          flash_dom.html('Thank you ' + email + "! The feedback send successful!");
          Router.go('/');
        }
      });
      return false;
    }
  });
}