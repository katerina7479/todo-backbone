define([
    'underscore',
    'backbone'
  ],
  function(_, Backbone){
      var TodoItem = Backbone.Model.extend({
          initialize: function() {
          },
          url: function(){
              return this.id ? '/todos/' + this.id : '/todos/';
          }

      });
      return TodoItem;
  }
);