angular.module("homeComponent").component("patientDetailsComponent", {

    bindings: {
        patient: "<",
        onClose: "&"
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

            ctrl.close = function() {
                ctrl.onClose();
            }
        }
    ]
});