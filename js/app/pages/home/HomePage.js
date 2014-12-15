define([
    'keel/BaseView',
    'app/widgets/filters/FiltersWidget',
    'app/widgets/table/TableWidget',
    'text!app/pages/home/HomePageTemplate.html',
    'app/domain/Repository'
], 
function(
    BaseView,
    FiltersWidget,
    TableWidget,
    HomePageTemplate,
    Repository
) {
    'use strict';

    return BaseView.extend({
        tagName: 'section',
        id: 'home-page',

        elements: [
            'filters',
            'table'
        ],

        events: {
            'click .filter': 'filterRows'
        },

        template: {
            name: 'HomePageTemplate',
            source: HomePageTemplate
        },

        initialize: function() {
            this.locations = Repository.getLocations();
        },

        postRender: function() {
            this.addChildren([
                {
                    id: 'FiltersWidget',
                    viewClass: FiltersWidget,
                    parentElement: $(this.filtersElement)
                },
                {
                    id: 'TableWidget',
                    viewClass: TableWidget,
                    parentElement: $(this.tableElement),
                    options: {
                        collection: this.locations
                    }
                }
            ]);

            return this;
        },

        filterRows: function() {
            this.children['TableWidget'].trigger('filterRows', {
                favorites: this.children['FiltersWidget'].$el.children("input.favorites:checked"),
                type: this.children['FiltersWidget'].$el.children("input.type:checked").map(function(){ return this.name }).sort(),
                activity: this.children['FiltersWidget'].$el.children("input.activity:checked").map(function(){ return this.name }).sort()
            });
        }
    });
});