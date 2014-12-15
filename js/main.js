require([
    'app/framework/App',
    'jquery'
], 
function (App, $) {
    'use strict';

    // Set default timeout for AJAX requests to 20 seconds
    // This should be done before instantiating the AppRouter,
    // because the initialization sequence fires AJAX requests
    $.ajaxSetup({timeout: 20000});

    // Kick off the application by requiring in the app and starting it
    App.start();
});