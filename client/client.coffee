Meteor.startup ->
  AccountsEntry.config
    logo: 'logo.jpg'
    privacyUrl: '/privacy-policy'
    termsUrl: '/terms-of-use'
    homeRoute: '/dashboard'
    profileRoute: '/profile'
    passwordSignupFields: 'EMAIL_ONLY'
    showSignupCode: true
    showOtherLoginServices: true
    extraSignUpFields: [
      field: 'name'
      name: 'This Will Be The Initial Value'
      label: 'Full Name'
      placeholder: 'John Doe'
      type: 'text'
      required: true
    ]

  Breadcrumb

  return