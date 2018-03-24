angular.module("homeComponent").component("doctorProfileComponent", {

    bindings: {
    },

    template: require("./doctorProfileComponent.html"),

    controller: [
        "$log",

        function($log) {
            "use strict";
            var ctrl = this;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function() {
                ctrl.estimatedWaitingTime = "10min";
                ctrl.initDoctorDetails();
            }

            ctrl.initDoctorDetails = function() {
                ctrl.avatar =  "../../resources/images/chinho.jpg"
                ctrl.displayName = "Chin Ho CHEUNG"
            };
        }
    ]
});