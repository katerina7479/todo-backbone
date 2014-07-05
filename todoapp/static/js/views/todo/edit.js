define([
    'jquery',
    'underscore',
    'backbone',

    'models/todo',
    'text!../../../templates/todo/todo.html'
    ],
    function($, _, Backbone, TodoModel, todoItemTemplate){
        var TodoItemView = Backbone.View.extend({
            el: $('#main'),
            initialize: function() {
                this.model = new TodoModel({id:this.id});
                var that = this;
                this.model.fetch({
                    success: function () {
                      that.render();
                    }
                });
            },
            render: function() {
                console.log(this.model);
                var template = _.template(todoItemTemplate, {model: this.model});
                this.$el.html(template);
            }

        });
        return TodoItemView;
    }
);