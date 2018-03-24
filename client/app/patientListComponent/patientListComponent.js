angular.module("homeComponent").component("patientListComponent", {

    bindings: {
        patients: "<",
        currentPatient: "<",
        onPatientClick : "&"
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
            
            ctrl.onClick = function(patient) {
                ctrl.onPatientClick({"$patient" : patient});
            }
        }
    ]
});
