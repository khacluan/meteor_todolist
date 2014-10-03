if (Meteor.isClient) {
  Template.contactForm.helpers({
    contactFormSchema: function() {
      return Schemas.contact;
    }
  });
}