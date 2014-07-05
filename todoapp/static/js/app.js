define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, Router){
        var initialize = function(){
            console.log("Initializing Router");
            Router.initialize();
        };
        return {initialize: initialize};
});