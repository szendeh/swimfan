define([
    'keel/Router'
],
function(Router) {
    'use strict';

    /**
    * Defining the application router, you can attach sub routers here.
    *
    * @class AppRouter
    * @constructor
    * @extends Router
    **/
    var AppRouter = Router.extend({
        routes: {
            'details/:id': 'goToDetailsPage',
            '':       'goToPage',
            ':page':  'goToPage'
        },

        goToDetailsPage: function(id) {
            this.goToPage('details');
            console.log(id);
        }
    });

    return AppRouter;
});