define([
    'backbone',
    'app/domain/Location'
], function(Backbone, Location) {
    'use strict';

    return Backbone.Collection.extend({
        url: 'http://localhost:8080/locations'

        model: Location
    });
});