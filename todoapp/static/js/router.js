define([
    'jquery',
    'underscore',
    'backbone',
    'views/todo/list',
    'views/todo/edit'
   ],
   function($, _, Backbone, TodoListView, TodoItemView){
     var AppRouter = Backbone.Router.extend({
       routes: {
          '': "showTodos",
          'item(/:id)': "showItem"
       },
       showTodos: function(){
           var todoListView = new TodoListView();
           todoListView.render();
       },
       showItem: function(id){
           var todoItemView = new TodoItemView({id:id});
           todoItemView.render();
       }
     });

     var initialize = function(){
       var app_router = new AppRouter();
       Backbone.history.start();
     };
     return {initialize: initialize};
   }
);
