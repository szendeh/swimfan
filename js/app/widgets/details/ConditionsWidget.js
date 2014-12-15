define([
    'keel/BaseView',
    'app/domain/Repository',
    'app/widgets/details/ConditionsTableRowWidget',
    'text!app/widgets/details/ConditionsWidgetTemplate.html'
], 
function(
    BaseView,
    Repository,
    ConditionsTableRowWidget,
    ConditionsWidgetTemplate
) {
    'use strict';

    return BaseView.extend({
        tagName: 'table',
        id: 'conditions-widget',

        template: {
            name: 'ConditionsWidgetTemplate',
            source: ConditionsWidgetTemplate
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
                        viewClass: ConditionsTableRowWidget,
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