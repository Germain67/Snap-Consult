angular.module("homeComponent").component("interrogatoireComponent", {

    bindings: {
    },

    template: require("./interrogatoireComponent.html"),

    controller: [
        "$log",

        function($log) {
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

            ctrl.onContinue = function() {
                console.error("test");
            };
        }
    ]
});
