require.config({
    baseUrl: 'static/js',
    paths: {
        app: 'app',
        router: 'router',
        views: 'views',
        models: 'models',
        jquery: "vendor/jquery",
        underscore: "vendor/underscore-min",
        backbone: "vendor/backbone-min",
        templates: "../templates"
    }
});

require([
      'app'
    ],
    function(App){
      console.log("Initializing App");
      App.initialize()
    }
);