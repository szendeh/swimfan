define([
    'keel/BaseView',
    'app/domain/Repository',
    'text!app/widgets/details/DetailsWidgetTemplate.html'
], 
function(
    BaseView,
    Repository,
    DetailsWidgetTemplate
) {
    'use strict';

    return BaseView.extend({
        tagName: 'section',
        id: 'details-widget',

        template: {
            name: 'DetailsWidgetTemplate',
            source: DetailsWidgetTemplate
        },

        events: {
            'click .js-favorite': 'toggleFavorite'
        },

        initialize: function() {
            this.favorites = JSON.parse(window.localStorage.favorites) || {};

            this.model.attributes.favorite = this.favorites[this.model.id] || false;
        },

        toggleFavorite: function(e) {
            var model_id = this.model.id;
            
            this.model.attributes.favorite = this.favorites[model_id] = e.target.checked;
            window.localStorage.favorites = JSON.stringify(this.favorites);
        }
    });
});