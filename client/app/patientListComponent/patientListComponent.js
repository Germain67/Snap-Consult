angular.module("homeComponent").component("patientListComponent", {

    bindings: {
        patients: "<",
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

                ctrl.onClick = function(patient) {
                    ctrl.onPatientClick({"$patient" : patient});
                }
                
            }
        }
    ]
});
