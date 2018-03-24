angular.module("homeComponent").component("patientInfoComponent", {

    bindings: {
    },

    template: require("./patientInfoComponent.html"),

    controller: [
        "$log",
        "$state",
        "$http",

        function($log, $state, $http) {
            "use strict";
            var ctrl = this;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function() {
            };

            ctrl.onContinue = function() {
                // $http({ method: "POST", url: "/adduser", data: {} });
                $state.go("reservePlace");
            };
        }
    ]
});