angular.module("homeComponent").component("symptomesComponent", {

    bindings: {
    },

    template: require("./symptomesComponent.html"),

    controller: [
        "$log",

        function($log) {
            "use strict";
            var ctrl = this;
            var fever;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function() {
                console.log("symptomes");
            };

            ctrl.onContinue = function() {
                console.error("test");
            };
        }
    ]
});
