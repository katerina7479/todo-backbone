define([
    'jquery',
    'underscore',
    'backbone',
    'views/todo/list'
   ],
   function($, _, Backbone, TodoListView){
     var AppRouter = Backbone.Router.extend({
       routes: {
          '/todos': "showTodos",
          '*actions': 'defaultAction'
       }
     });

     var initialize = function(){
       var app_router = new AppRouter;
       app_router.on('showTodos', function(){
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
