angular.module("homeComponent").component("patientDetailsComponent", {

    bindings: {
        patient: "<"
    },

    template: require("./patientDetailsComponent.html"),

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