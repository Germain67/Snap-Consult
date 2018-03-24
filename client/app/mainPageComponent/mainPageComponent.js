import patientService from '../services/patientService' 

angular.module("homeComponent").component("mainPageComponent", {

    bindings: {
    },

    template: require("./mainPageComponent.html"),

    controller: [

        "$log",
        "$interval",
        "patientService",

        function($log, $interval, patientService) {
            "use strict";
            var ctrl = this;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function() {
                ctrl.patients = [];
                ctrl.getPatients();
                ctrl.currentPatient = ctrl.patients[0];
                $interval(function() { ctrl.getPatients(); }, 5000);
            }

            ctrl.getPatients = function(){
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