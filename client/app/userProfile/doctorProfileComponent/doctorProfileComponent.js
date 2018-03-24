angular.module("homeComponent").component("doctorProfileComponent", {

    bindings: {
    },

    template: require("./doctorProfileComponent.html"),

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
            }
        }
    ]
});