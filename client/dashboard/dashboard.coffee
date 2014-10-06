Template.dashboardSidebar.helpers
  active: (path) ->
    (if Router.current().path is path then 'active' else '')

Template.toolbarFixed.helpers
  addLinkFor: ->
    el_path = Router.current().path.split('/')
    model = el_path[el_path.length - 1]
    if model == 'categories'
      'Category'
    else
      model[0].toUpperCase() + model.slice(1, model.length - 1);
