Template.dashboard_sidebar.helpers({

  active: function (path) {
    return Router.current().path == path ? 'active' : '';
  }
});