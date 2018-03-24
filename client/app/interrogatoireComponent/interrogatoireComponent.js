angular.module("homeComponent").component("interrogatoireComponent", {

    bindings: {
    },

    template: require("./interrogatoireComponent.html"),

    controller: [
        "$log",

        function($log) {
            "use strict";
            var ctrl = this;
            var activity;
            var medicaments;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function() {
                console.log("interro");
            };

            ctrl.onContinue = function() {
                console.error("test");
            };
        }
    ]
});
