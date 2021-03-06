define([
    'keel/BaseView',
    'app/domain/Repository',
    'app/widgets/details/AlertsTableRowWidget',
    'text!app/widgets/details/AlertsWidgetTemplate.html'
], 
function(
    BaseView,
    Repository,
    AlertsTableRowWidget,
    AlertsWidgetTemplate
) {
    'use strict';

    return BaseView.extend({
        tagName: 'table',
        id: 'alerts-widget',

        template: {
            name: 'AlertsWidgetTemplate',
            source: AlertsWidgetTemplate
        },

        elements: [
            'tableBody'
        ],

        initialize: function() {
            this.listenTo(this.collection, 'sync', this.addRows);
        },

        postRender: function() {
            this.collection.fetch();
        },

        addRows: function(collection) {
            var that = this;

            _.each(collection.models, function(model){
                // needed because we're faking things with json, not a real DB
                if (model.get('location_id') == that.attributes.location_id) {
                    that.addChild({
                        viewClass: AlertsTableRowWidget,
                        parentElement: that.tableBodyElement,
                        options: {
                            model: model
                        }
                    });
                }
            });
        }
    });
});