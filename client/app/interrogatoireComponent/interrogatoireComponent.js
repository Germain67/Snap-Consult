angular.module("homeComponent").component("interrogatoireComponent", {

    bindings: {
    },

    template: require("./interrogatoireComponent.html"),

    controller: [
        "$log",
        "$state",

        function($log, $state) {
            "use strict";
            var ctrl = this;
            ctrl.page = "page1";
            ctrl.activity;
            ctrl.medicaments;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function() {
                console.log("interro");
                console.log(page);
            };

            ctrl.onBack = function() {
                $state.go("symptomes");
            };

            ctrl.onContinue = function() {
                $state.go("finish");
            };
        }
    ]
});
