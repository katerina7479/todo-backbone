define([
    'underscore',
    'backbone'
  ],
  function(_, Backbone){
      var TodoItem = Backbone.Model.extend({
          initialize: function() {
              console.log("Initializing Model");
          },
          url: function(){
              return this.id ? '/todos/' + this.id : '/todos';
          }
      });
      return TodoItem;
  }
);