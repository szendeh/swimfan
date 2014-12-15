define([
    'keel/BaseView',
    'text!app/widgets/details/ConditionsTableRowWidgetTemplate.html',
    'app/domain/Repository'
], 
function(
    BaseView,
    ConditionsTableRowWidgetTemplate,
    Repository
) {
    'use strict';

    return BaseView.extend({
        tagName: 'tr',

        template: {
            name: 'ConditionsTableRowWidgetTemplate',
            source: ConditionsTableRowWidgetTemplate
        }
    });
});