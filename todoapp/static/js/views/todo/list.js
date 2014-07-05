define([
    'jquery',
    'underscore',
    'backbone',

    'collections/todos',
    'text!../../../templates/todo/list.html'
    ],
    function($, _, Backbone, TodoCollection, todoListTemplate){
        var TodoListView = Backbone.View.extend({
            el: $('#main'),
            initialize: function() {
                this.collection = new TodoCollection();
                var that = this;
                this.collection.fetch({
                    success: function () {
                      that.render(that);
                    }
                });
            },
            render: function() {
                console.log(this.collection);
                var collectionTemplate = _.template(todoListTemplate, {collection: this.collection});
                console.log(collectionTemplate);
                this.$el.html(collectionTemplate);
            }
        });
        return TodoListView;
    }
);