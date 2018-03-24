angular.module("homeComponent").component("patientListComponent", {

    bindings: {
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
            
                ctrl.patients = [
                    { name:"mathieu", motif:"hjgjhghjghjgjhg"},
                    { name:"truc", motif:"hjgjhghjghjgjhg"},
                    { name:"chose", motif:"hjgjhghjghjgjhg"}
                ];

                ctrl.onClick = function(patient) {
                    ctrl.onPatientClick({"$patient" : patient});
                }
            }
        }
    ]
});
