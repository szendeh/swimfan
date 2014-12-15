define([
    'keel/BaseView',
    'app/widgets/details/AlertsWidget',
    'app/widgets/details/ConditionsWidget',
    'app/widgets/details/DetailsWidget',
    'text!app/pages/details/DetailsPageTemplate.html',
    'app/domain/Repository'
], 
function(
    BaseView,
    AlertsWidget,
    ConditionsWidget,
    DetailsWidget,
    DetailsPageTemplate,
    Repository
) {
    'use strict';

    return BaseView.extend({
        tagName: 'section',
        id: 'details-page',

        template: {
            name: 'DetailsPageTemplate',
            source: DetailsPageTemplate
        },

        elements: [
            'alerts',
            'conditions',
            'details'
        ],

        initialize: function() {
            this.locationId = Backbone.history.fragment.match(/\d+/);

            this.alerts = Repository.getAlerts();
            this.conditions = Repository.getConditions();
            this.details = Repository.getDetails();

            this.listenTo(this.details, 'sync', this.displayDetailsInfo);
        },

        postRender: function() {
            this.details.fetch();

            this.addChildren([
                {
                    viewClass: AlertsWidget,
                    parentElement: this.alertsElement,
                    options: {
                        collection: this.alerts,
                        attributes: {
                            location_id: this.locationId[0]   
                        }
                    }
                },
                {
                    viewClass: ConditionsWidget,
                    parentElement: this.conditionsElement,
                    options: {
                        collection: this.conditions,
                        attributes: {
                            location_id: this.locationId[0]   
                        }
                    }
                }
            ]);
        },

        displayDetailsInfo: function() {
            var detailsModel = this.details.get(this.locationId[0]);

            this.addChild({
                viewClass: DetailsWidget,
                parentElement: this.detailsElement,
                options: {
                    model: detailsModel
                }
            });
        }
    });
});