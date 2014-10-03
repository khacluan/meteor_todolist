var Schemas = {};

Contacts = new Meteor.Collection('contacts');

Schemas.contact = new SimpleSchema({
  email: {
    type: String,
    label: 'Email',
    regEx: SimpleSchema.RegEx.Email,
    max: 150
  },

  title: {
    type: String,
    label: 'Title',
    min: 5,
    max: 150
  },

  comment: {
    type: String,
    label: 'Comment',
    max: 1000
  }
});

Contacts.attachSchema(Schemas.contact);
