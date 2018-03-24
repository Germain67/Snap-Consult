import patientService from '../services/patientService' 

angular.module("homeComponent").component("mainPageComponent", {

    bindings: {
    },

    template: require("./mainPageComponent.html"),

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
                ctrl.currentPatient = "";
                ctrl.patients = [];
                patientService.getPatients().then(function(patients) {
                    ctrl.patients = patients;
                });
            }

            ctrl.onPatientClick = function(patient) {
                ctrl.currentPatient = patient;
            }
        }
    ]
});