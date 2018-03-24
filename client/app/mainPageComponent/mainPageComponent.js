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
                this.currentPatient = "";
                this.listTabs = ["File d'attente", "Statistiques"];
                this.currentTab = this.listTabs[0];
                patientService.getPatients();
            }

            ctrl.onPatientClick = function(patient) {
                this.currentPatient = patient;
            }
        }
    ]
});
