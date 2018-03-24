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
                    { age:14, displayName:"Mathieu Cordebard", motif:"J'ai mal la tête et c terrible ce truc c juste afferux truc muche machin bidule. J'ai mal la tête et c terrible ce truc c juste afferux truc muche machin bidule", avatar:"dwaine.jpg"},
                    { age:18, displayName:"Chin ho Cheung", motif:"J'ai mal le pied", avatar:"dwaine.jpg"},
                    { age:26, displayName:"Dobromir Nikolov", motif:"J'ai mal au cul", avatar:"dwaine.jpg"}
                ];

                ctrl.onClick = function(patient) {
                    ctrl.onPatientClick({"$patient" : patient});
                }
            }
        }
    ]
});
