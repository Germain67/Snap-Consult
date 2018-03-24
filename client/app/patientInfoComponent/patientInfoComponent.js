angular.module("homeComponent").component("patientInfoComponent", {

    bindings: {
    },

    template: require("./patientInfoComponent.html"),

    controller: [
        "$log",
        "$state",

        function($log, $state) {
            "use strict";
            var ctrl = this;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function() {
            };

            ctrl.onContinue = function() {
                $state.go("symptomes");
            };
        }
    ]
});
