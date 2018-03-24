angular.module("homeComponent").component("patientListItemComponent", {

    bindings: {
        patient: "<"
    },

    template: require("./patientListItemComponent.html"),

    controller: [
        "$log",

        function($log) {
            "use strict";
            var ctrl = this;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function() {
                
            }
        }
    ]
});