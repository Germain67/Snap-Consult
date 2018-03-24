angular.module("homeComponent").component("patientListItemComponent", {

    bindings: {
        patient: "<",
        currentPatient: "<"
    },

    template: require("./patientListItemComponent.html"),

    controller: [
        "$log",

        function($log) {
            "use strict";
            var ctrl = this;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function() {
                ctrl.class = ctrl.currentPatient._id === ctrl.patient._id ? "patientListItemComponentSelected" : "";
            }

            ctrl.$onChanges = function(changesObj) {
                if (changesObj.currentPatient) {
                    ctrl.class = ctrl.currentPatient._id === ctrl.patient._id ? "patientListItemComponentSelected" : "";
                }
            };
        }
    ]
});