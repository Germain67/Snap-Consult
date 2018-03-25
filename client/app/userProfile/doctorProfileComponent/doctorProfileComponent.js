angular.module("homeComponent").component("doctorProfileComponent", {

    bindings: {
    },

    template: require("./doctorProfileComponent.html"),

    controller: [
        "$q",
        "$log",
        "$translate",
        "$state",
        "patientService",

        function($q,$log, $translate, $state, patientService) {
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
                ctrl.avatar =  "../../resources/images/michel.jpg";
                ctrl.displayName = "Dr. Michel";
                ctrl.address = "6 rue du Rock";
                ctrl.city = "67000 Strasbourg";
                ctrl.phoneNumber = "06 00 11 22 33";
                ctrl.affluenceText = "Affluence élevée";

                ctrl.getPatients();
            };

            ctrl.computeWaitTime = function() {
                ctrl.waitingTime = {time: "10"};
                
            };

            ctrl.onContinue = function() {
                $state.go("patientInfoComponent");
            };

            ctrl.getPatients = function () {
                return $q(function (resolve, reject) {
                    patientService.getPatients()
                        .then(function (patients) {
                            ctrl.nb = patients.length;
                            var time = (patients.length)*15;

                            var min = time%60;

                            if (!min) {
                                min = "00";
                            }

                            var hours = Math.floor(time/60);

                            ctrl.time = hours + "h" + min;
                            resolve();
                        })
                        .catch(function () { reject(); });

                    /*this.listTabs = ["File d'attente", "Statistiques"];
                    this.currentTab = this.listTabs[0];*/
                })
            };
        }
    ]
});