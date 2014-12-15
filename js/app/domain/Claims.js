define([
    'backbone',
    'app/domain/Claim'
], function(Backbone, Claim) {
    'use strict';

    return Backbone.Collection.extend({
        url: 'http://localhost:8080/claims'

        model: Claim
    });
});