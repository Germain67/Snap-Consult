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
                ctrl.firstname = "Chloé";
                ctrl.lastname = "Tobaco";
                ctrl.age = "29";
                ctrl.avatar = "dwayne2";
            };

            ctrl.onContinue = function() {
                $http({ method: "POST", url: "http://localhost:8080/adduser", data: {firstname: ctrl.firstname, lastname: ctrl.lastname, age: ctrl.age, avatar: ctrl.avatar} })
                    .then(function() {
                        $state.go("patientBoard");
                    })
                
            };
        }
    ]
});
