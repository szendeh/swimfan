define([
    'keel/BaseView',
    'text!app/widgets/details/AlertsTableRowWidgetTemplate.html',
    'app/domain/Repository'
], 
function(
    BaseView,
    AlertsTableRowWidgetTemplate,
    Repository
) {
    'use strict';

    return BaseView.extend({
        tagName: 'tr',

        template: {
            name: 'AlertsTableRowWidgetTemplate',
            source: AlertsTableRowWidgetTemplate
        }
    });
});