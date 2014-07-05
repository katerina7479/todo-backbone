define([
    'underscore',
    'backbone'
  ],
  function(_, Backbone){
      var TodoModel;
      TodoModel = Backbone.Model.extend({
          title: "Thing",
          description: "All the things",
          done: False
      });
      return TodoModel
  }
);