angular.module("homeComponent").component("headerComponent", {

    bindings: {
        nbPatients:"<"
    },

    template: require("./headerComponent.html"),

    controller: [

        "$log",
        "patientService",

        function($log, patientService) {
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