Router.configure
  layoutTemplate: 'layout'
  loadingTemplate: 'Loading'
  notFoundTemplate: 'NotFound'

Router.map ->

  # Frontend
  @route 'home',
    path: '/'

  @route 'about',
    path: '/about'

  @route 'contactForm',
    path: '/contact'

  @route 'loading',
    path: '/loading'

  # Dashboard
  @route 'dashboardIndex',
    path: '/dashboard'
    layoutTemplate: 'dashboard'

  @route 'dashboardContact',
    path: '/dashboard/contacts'
    layoutTemplate: 'dashboard'

  @route 'dashboardContactDetail',
    path: '/dashboard/contact/:id'
    layoutTemplate: 'dashboard'

  @route 'dashboardUser',
    path: '/dashboard/users'
    layoutTemplate: 'dashboard'

  @route 'dashboardPost',
    path: '/dashboard/posts'
    layoutTemplate: 'dashboard'

  @route 'dashboardCategory',
    path: '/dashboard/categories'
    layoutTemplate: 'dashboard'


# Waiting filter
Router.onBeforeAction ->
  if !@ready()
    @render 'loading'

# 404 filter
Router.onBeforeAction ->
  if @ready() and !@data()
    @render('404')

# Login filter
Router.onBeforeAction (->
  if !Meteor.loggingIn() and !Meteor.user()
    Router.go '/sign-in'
),
  except: [
    'entrySignIn',
    'entrySignUp',
    'about'
  ]