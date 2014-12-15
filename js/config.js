// Set up the "require" variable which RequireJS will pick up when it is loaded in main.js.
// This ensures that the configuration loads before any other scripts are required in.
var require = {
    // Initialize the application with the main application file
    deps: ['main'],

    paths: {
        backbone: 'vendor/backbone-min',
        handlebars: 'vendor/handlebars-v2.0.0',
        jquery: 'vendor/jquery-1.11.1.min',
        tablesorter: 'vendor/jquery.tablesorter',
        text: 'vendor/text',
        underscore: 'vendor/underscore'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        tablesorter: {
            deps: ['jquery'],
            exports: 'tablesorter'
        },
        underscore: {
            exports: '_'
        }
    }
};