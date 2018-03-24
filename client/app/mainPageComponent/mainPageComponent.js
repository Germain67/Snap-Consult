import patientService from '../services/patientService'

angular.module("homeComponent").component("mainPageComponent", {

    bindings: {
    },

    template: require("./mainPageComponent.html"),

    controller: [

        "$log",
        "$q",
        "$interval",
        "patientService",

        function ($log, $q, $interval, patientService) {
            "use strict";
            var ctrl = this;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function () {
                ctrl.patients = [];
                ctrl.getPatients().then(function () {
                    ctrl.currentPatient = ctrl.patients[0];
                });
                $interval(function() { ctrl.getPatients(); }, 5000);
            }

            ctrl.getPatients = function () {
                return $q(function (resolve, reject) {
                    patientService.getPatients()
                        .then(function (patients) {
                            ctrl.patients = patients;
                            if (ctrl.currentPatient) {
                                ctrl.currentPatient = patients.find(function(patient) {
                                    return patient._id === ctrl.currentPatient._id;
                                });
                            }
                            if (!ctrl.currentPatient) { ctrl.currentPatient = ctrl.patients[0]; }
                            resolve();
                        })
                        .catch(function () { reject(); });

                    /*this.listTabs = ["File d'attente", "Statistiques"];
                    this.currentTab = this.listTabs[0];*/
                })
            };

            ctrl.onPatientClick = function (patient) {
                ctrl.currentPatient = patient;
            }

            ctrl.close = function () {
                patientService.removePatient(ctrl.currentPatient)
                    .then(function () {
                        ctrl.getPatients();
                    })
            }
        }
    ]
});
