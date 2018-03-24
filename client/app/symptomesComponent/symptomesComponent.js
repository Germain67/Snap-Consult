angular.module("homeComponent").component("symptomesComponent", {

    bindings: {
    },

    template: require("./symptomesComponent.html"),

    controller: [
        "$log",,
        "$state",

        function($log, $state) {
            "use strict";
            var ctrl = this;
            var fever;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function() {
                console.log("symptomes");
            };

            ctrl.onBack = function() {
                $state.go("patientInfoComponent");
            };

            ctrl.onContinue = function() {
                $state.go("interrogatoire");
            };
        }
    ]
});
