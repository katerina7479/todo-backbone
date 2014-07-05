define([
    'underscore',
    'backbone',
    'models/todo'
  ],
  function(_, Backbone, TodoModel){
      var TodoCollection;
      TodoCollection = Backbone.Collection.extend({
          model: TodoModel
      });
      return TodoCollection;
  }
);
