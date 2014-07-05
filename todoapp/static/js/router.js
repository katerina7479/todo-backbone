define([
    'jquery',
    'underscore',
    'backbone',
    'views/todo/list'
   ],
   function($, _, Backbone, TodoListView){
     var AppRouter = Backbone.Router.extend({
       routes: {
          '/todos/#': "showTodos",
          '*actions': 'defaultAction'
       }
     });

     var initialize = function(){
       console.log("Executing Router Initialize");
       var app_router = new AppRouter();
       app_router.on('showTodos', function(){
          console.log("Showing Todos");
          var todoListView = new TodoListView();
          todoListView.render();
       });
       app_router.on('defaultAction', function(actions){
          console.log("Route not found: ", actions)
       });
       Backbone.history.start();
     };
     return {initialize: initialize};
   }
);
