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
          'item/:id': "showItem"
       },
       showTodos: function(){
           console.log("Showing Todos");
           var todoListView = new TodoListView();
           todoListView.render();
       },
       showItem: function(id){
           console.log("Showing Item");
           var todoItemView = new TodoItemView({id:id});
           todoItemView.render();
       }
     });

     var initialize = function(){
       console.log("Executing Router Initialize");
       var app_router = new AppRouter();
       Backbone.history.start();
     };
     return {initialize: initialize};
   }
);
