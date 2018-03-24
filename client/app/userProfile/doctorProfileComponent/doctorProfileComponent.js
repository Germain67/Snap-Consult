angular.module("homeComponent").component("doctorProfileComponent", {

    bindings: {
    },

    template: require("./doctorProfileComponent.html"),

    controller: [
        "$log",
        "$translate",
        "$state",

        function($log, $translate, $state) {
            "use strict";
            var ctrl = this;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function() {
                ctrl.waitingTimeText = $translate("estimatedWaitingTime", { time: ctrl.waitingTime });
                ctrl.initDoctorDetails();
            }

            ctrl.initDoctorDetails = function() {
                ctrl.avatar =  "../../resources/images/chinho.jpg";
                ctrl.displayName = "Dr. Duhâne Fils-de-Jean";
                ctrl.address = "6 rue du Rock";
                ctrl.city = "67000 Strasbourg";
                ctrl.phoneNumber = "06 00 11 22 33";
                ctrl.affluenceText = "Affluence élevée";
            };

            ctrl.computeWaitTime = function() {
                ctrl.waitingTime = {time: "10"};
                
            };

            ctrl.onContinue = function() {
                $state.go("patientInfoComponent");
            };
        }
    ]
});