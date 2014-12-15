define([
    'backbone'
],
function(
    Backbone
) {
    'use strict';

    return Backbone.Model.extend({
        idAttribute: 'identifier',
        urlRoot: 'http://localhost:8080/claim',
        url: function() {
            // return this.urlRoot +'/'+ this.get("identifier");
            return this.urlRoot +'/'+ this.get("identifier") +'?wid='+ this.get("workIdentifier");
        }
    });
});