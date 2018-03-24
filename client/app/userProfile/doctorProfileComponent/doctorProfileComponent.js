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
                ctrl.waitingTime = {time: "10"};
                ctrl.waitingTimeText = $translate("estimatedWaitingTime", { time: ctrl.waitingTime });
                ctrl.initDoctorDetails();
            }

            ctrl.initDoctorDetails = function() {
                ctrl.avatar =  "../../resources/images/chinho.jpg"
                ctrl.displayName = "Chin Ho CHEUNG"
            };

            ctrl.onContinue = function() {
                $state.go("patientInfoComponent");
            };
        }
    ]
});