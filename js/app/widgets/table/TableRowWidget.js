define([
    'keel/BaseView',
    'text!app/widgets/table/TableRowWidgetTemplate.html',
    'app/domain/Repository'
], 
function(
    BaseView,
    TableRowWidgetTemplate,
    Repository
) {
    'use strict';

    return BaseView.extend({
        tagName: 'tr',

        template: {
            name: 'TableRowWidgetTemplate',
            source: TableRowWidgetTemplate
        }
    });
});