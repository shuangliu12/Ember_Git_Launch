App = Ember.Application.create();

App.Router.map(function() {
  this.resource('members', function(){
    this.route('show', {path: "/:login"});
  });//make a route, nest routes with a function
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    // var organization = {
    //   name: "Launch Academy",
    //   location: "Boston, MA",
    //   login: "launchacademy",
    //   email: "hello@launchacademy.com"
    // };
    var organization = Ember.$.getJSON('https://api.github.com/orgs/LaunchAcademy');

    return organization;
  }
});

App.MembersRoute = Ember.Route.extend({
  model: function(){
    var members = Ember.$.getJSON('https://api.github.com/orgs/LaunchAcademy/members');
    return members;
  }
});

App.MembersShowRoute = Ember.Route.extend({
  model: function(params){
    var url = 'https://api.github.com/users/'+ params.login;
    var member = Ember.$.getJSON(url);

    return member;
  }
});
