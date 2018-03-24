angular.module("homeComponent").component("patientReservePlaceComponent", {
    
        bindings: {
        },
    
        template: require("./patientReservePlaceComponent.html"),
    
        controller: [
            "$log",
            "$state",
    
            function($log, $state) {
                "use strict";
                var ctrl = this;
    
                /***********************************************************/
                /** INITIALISATION STUFF                                  **/
                /***********************************************************/
                ctrl.$onInit = function() {
                };

                ctrl.onContinue = function() {
                    $state.go("patientBoard");
                };
            }
        ]
    });