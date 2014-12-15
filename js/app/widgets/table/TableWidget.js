define([
    'keel/BaseView',
    'app/domain/Repository',
    'app/widgets/table/TableRowWidget',
    'text!app/widgets/table/TableWidgetTemplate.html',
    'tablesorter'
], 
function(
    BaseView,
    Repository,
    TableRowWidget,
    TableWidgetTemplate
) {
    'use strict';

    return BaseView.extend({
        tagName: 'table',
        id: 'table-widget',

        template: {
            name: 'TableWidgetTemplate',
            source: TableWidgetTemplate
        },

        elements: [
            'tableBody'
        ],

        events: {
            'click .js-favorite': 'toggleFavorite'
        },

        initialize: function() {
            this.favorites = window.localStorage.favorites ? JSON.parse(window.localStorage.favorites) : {};
        },

        postRender: function() {
            this.listenTo(this.collection, 'sync', this.addRows);
            this.listenTo(this, 'filterRows', this.filterRows);
            this.collection.fetch();
        },

        addRows: function(collection) {
            var that = this;

            _.each(collection.models, function(model) {
                model.attributes.favorite = that.favorites[model.id] || false;

                that.addChild({
                    id: 'tr_'+ model.id,
                    viewClass: TableRowWidget,
                    parentElement: that.tableBodyElement,
                    options: {
                        model: model
                    }
                });
            });

            this.$el.tablesorter( {sortList: [[4,0]]} );
        },

        filterRows: function(filters) {
            _.each(this.children, function(tableRowView) {
                var model = tableRowView.model;
                
                if ((filters.favorites.length && model.get("favorite") != true) ||
                    ( filters.activity.length && _.indexOf(filters.activity, model.get("activity"), true) == -1 ) ||
                    ( filters.type.length && _.indexOf(filters.type, model.get("type"), true) == -1 )) {
                    tableRowView.$el.hide();
                }
                else {
                    tableRowView.$el.show();
                }
            });
        },

        toggleFavorite: function(e) {
            var model_id = e.target.value;
            this.collection.get(model_id).attributes.favorite = this.favorites[model_id] = e.target.checked;
            window.localStorage.favorites = JSON.stringify(this.favorites);
        }
    });
});