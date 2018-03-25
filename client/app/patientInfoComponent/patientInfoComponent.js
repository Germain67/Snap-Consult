angular.module("homeComponent").component("patientInfoComponent", {

    bindings: {
    },

    template: require("./patientInfoComponent.html"),

    controller: [
        "$log",
        "$state",
        "$http",
        "$interval",

        function($log, $state, $http, $interval) {
            "use strict";
            var ctrl = this;

            /***********************************************************/
            /** INITIALISATION STUFF                                  **/
            /***********************************************************/
            ctrl.$onInit = function() {
                ctrl.firstname = "Chloé";
                ctrl.lastname = "Tobaco";
                ctrl.age = "29";
                ctrl.avatar = "dwayne2";
                ctrl.motive = "Cystite";
            };

            ctrl.onContinue = function() {
                $interval(function() {
                    $http({ method: "POST", url: "http://localhost:8080/adduser", data: {firstname: ctrl.firstname, lastname: ctrl.lastname, age: ctrl.age, avatar: ctrl.avatar, motive: ctrl.motive} }) 
                }, 5000, 1);
                
                $state.go("patientBoard");
            };
        }
    ]
});
