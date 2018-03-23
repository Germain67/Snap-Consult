angular.module("homeComponent").component("secondComponent", {

    bindings: {
    },

    template: require("./secondComponent.html"),

    controller: [
        "$log",

        function($log) {
            "use strict";
            var ctrl = this;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function() {
                ctrl.test="chouette";
            }
        }
    ]
});