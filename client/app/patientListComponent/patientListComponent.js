angular.module("homeComponent").component("patientListComponent", {

    bindings: {
    },

    template: require("./patientListComponent.html"),

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