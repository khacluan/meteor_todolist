Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {

  //Frontend routers
  this.route('home', { path: '/' });

  this.route('about', { path: '/about' });

  this.route('contactForm', { path: '/contact' });


  // Dashboard routers
  this.route('dashboard_index', {
    layoutTemplate: 'dashboard',
    path: '/dashboard'
  });

  this.route('dashboard_contact', {
    layoutTemplate: 'dashboard',
    path: '/dashboard/contacts'
  });

  this.route('dashboard_contact_detail', {
    layoutTemplate: 'dashboard',
    path: '/dashboard/contact/:id'
  });

  this.route('dashboard_user', {
    layoutTemplate: 'dashboard',
    path: '/dashboard/users'
  });

  this.route('dashboard_post', {
    layoutTemplate: 'dashboard',
    path: '/dashboard/posts'
  })

});
