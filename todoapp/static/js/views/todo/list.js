define([
    'jquery',
    'underscore',
    'backbone',

    'collections/todos',
    'text!templates/todo/list.html'
    ],
    function($, _, Backbone, TodoCollection, todoListTemplate){
        var TodoListView;
        TodoListView = Backbone.View.extend({
            el: $('#main'),
            render: function(){
                var data = {};
                var viewTemplate = _.template(todoListTemplate, data);
                this.$el.append(viewTemplate);
            },
            initialize: function(){
              this.collection = new TodoCollection();
              this.collection.add({ title: "Build a website"});
              var collectionTemplate = _.template(todoListTemplate, { todos: this.collection.models });
              this.$el.html(collectionTemplate);
            }
        });
        return TodoListView;
    }
);