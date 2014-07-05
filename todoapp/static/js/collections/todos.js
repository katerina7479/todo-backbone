define([
    'underscore',
    'backbone',
    'models, todos'
  ],
  function(_, Backbone, TodoModel){
      var TodoCollection;
      TodoCollection = Backbone.Collection.extend({
          model: TodoModel
      });
      return TodoCollection;
  }
);
