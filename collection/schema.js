//Schemas

var Schemas = {};

//Contacts schema
Schemas.contact = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },

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
  },

  is_reply: {
    type: Boolean,
    autoValue: function() {
      if(this.isInsert){
        return false;
      }
    }
  }
});

Contacts.attachSchema(Schemas.contact);


// Post schema
Schemas.post = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },

  title: {
    type: String,
    label: 'Title',
    min: 5,
    max: 150
  },

  authorId: {
    type: String,
    autoValue: function(){
      console.log(Meteor.userId());
      if (this.isInsert || this.isUpdate) {
        return Meteor.userId();
      }
    }
  },

  content: {
    type: String,
    label: 'Content',
    max: 5000
  },

  created_at: {
    type: Date,
    label: 'Created at',
    optional: true,
    autoValue: function(){
      if (this.isInsert) {
        return new Date();
      };
    }
  },

  approved: {
    type: Boolean,
    autoValue: function(){
      if (this.isInsert) {
        return false;
      }
    }
  },

  tag: {
    type: String,
    label: 'Tag'
  }
});

Posts.attachSchema(Schemas.post);


// Comment schema
Schemas.comment = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },

  postId: {
    type: String
  },

  content: {
    type: String,
    label: 'Comment',
    max: 1000
  },

  created_at: {
    type: Date,
    label: 'Created at',
    optional: true
  }
});

Comments.attachSchema(Schemas.comment);


//Category schema
Schemas.category = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },

  title: {
    type: String,
    label: 'Title'
  },

  description: {
    type: String,
    label: 'Description',
    max: 1000
  },

  priority: {
    type: Number,
    label: 'Priority',
    autoValue: function() {
      if (this.isInsert) {
        return 0;
      }
    }
  },

  created_at: {
    type: Date,
    label: 'Created at',
    optional: true
  }
});

Categories.attachSchema(Schemas.category);