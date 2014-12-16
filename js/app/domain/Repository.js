define([
    'backbone'
], function(Backbone) {
    'use strict';

    var Alerts = Backbone.Collection.extend({
        url: 'alerts.json'
    });

    var Conditions = Backbone.Collection.extend({
        url: 'conditions.json'
    });

    var Details = Backbone.Collection.extend({
        url: 'details.json'
    });

    var Locations = Backbone.Collection.extend({
        url: 'locations.json'
    });
    
    var alerts = new Alerts();
    var conditions = new Conditions();
    var details = new Details();
    var locations = new Locations();

    var _repository = {
        getAlerts: function () {
            return alerts;
        },
        getConditions: function () {
            return conditions;
        },
        getDetails: function () {
            return details;
        },
        getLocations: function () {
            return locations;
        }
    };

    return _repository;
});