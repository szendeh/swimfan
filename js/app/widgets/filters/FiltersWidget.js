define([
    'keel/BaseView',
    'text!app/widgets/filters/FiltersWidgetTemplate.html',
    'app/domain/Repository'
], 
function(
    BaseView,
    FiltersWidgetTemplate,
    Repository
) {
    'use strict';

    return BaseView.extend({
        tagName: 'section',
        id: 'filters-widget',   

        template: {
            name: 'FiltersWidgetTemplate',
            source: FiltersWidgetTemplate
        }
    });
});