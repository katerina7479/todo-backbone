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
                if (this.id) {
                    this.model = new TodoModel({id: this.id});
                    console.log(this.model.id)
                }
                else{
                    this.model = new TodoModel();
                }
                var that = this;
                this.model.fetch({
                    success: function () {
                        that.render();
                    }
                })},
            render: function() {
                var template = _.template(todoItemTemplate, {model: this.model});
                this.$el.html(template);
                $('.ui.checkbox').checkbox();
                $('.ui.form').form({todo: {identifier  : 'todo',
                                    rules: [{type   : 'empty',
                                             prompt : 'Please enter your todo item'
                                    }]}},
                                    {on: blur, 'inline': true});
            },
            events: {
                "click #submit": "saveMe",
                "click #cancel": "redirect"
            },
            saveMe: function(){
                var that = this;
                var done = $('.ui.form').form('get field', 'done').prop("checked");
                console.log(done);
                dict = {"title": $('#todo').val().toString(),
                        "description": $('#notes').val().toString(),
                        "done": done
                };
                console.log(dict);
                that.model.save(dict, {
                    success: function(model, response){
                        //console.log("Success");
                        that.undelegateEvents();
                        window.location = "/#";
                    },
                    error: function(model, response){
                        console.log("Error Saving");
                    }
                });
            },
            redirect: function(e){
                e.preventDefault();
                this.undelegateEvents();
                window.location = "/#";
            }

        });
        return TodoItemView;
    }
);