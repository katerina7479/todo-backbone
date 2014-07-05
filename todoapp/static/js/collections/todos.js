define([
    'underscore',
    'backbone',
    'models/todo'
  ],
  function(_, Backbone, TodoModel){
      var TodoCollection = Backbone.Collection.extend({
          model: TodoModel,
          url: '/todos',
          parse: function(response) {
            return response.response;
          }
      });
      return TodoCollection;
  }
);
