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
                var collectionTemplate = _.template(todoListTemplate, {collection: this.collection});
                this.$el.html(collectionTemplate);
            },
            events:{
                "click #add": "redirect",
                "click .item": "edit"
            },
            redirect: function(){
                 window.location = "/#item";
            },
            edit: function(e){
                var row = $(e.target).closest('div');
                var row_id = row.data("value");
                window.location = "/#item/" + row_id;
            }
        });
        return TodoListView;
    }
);