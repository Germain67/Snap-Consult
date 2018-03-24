angular.module("homeComponent").component("patientInfoComponent", {

    bindings: {
    },

    template: require("./patientInfoComponent.html"),

    controller: [
        "$log",

        function($log) {
            "use strict";
            var ctrl = this;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function() {
                console.log("iint");
            };

            ctrl.onContinue = function() {
                console.error("coucouc");
            };
        }
    ]
});