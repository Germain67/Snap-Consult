angular.module("homeComponent").component("patientBoardComponent", {
    
        bindings: {
        },
    
        template: require("./patientBoardComponent.html"),
    
        controller: [
            "$q",
            "$log",
            "$interval",
            "patientService",
    
            function($q, $log, $interval, patientService) {
                "use strict";
                var ctrl = this;
    
                /***********************************************************/
                /** INITIALISATION STUFF                                  **/
                /***********************************************************/
                ctrl.$onInit = function() {
                    ctrl.nb = 4;
                    ctrl.time = "1h00";

                    // ctrl.getPatients();

                    $interval(function() { ctrl.getPatients(); }, 5000);
                    
                };

                ctrl.getPatients = function () {
                    return $q(function (resolve, reject) {
                        patientService.getPatients()
                            .then(function (patients) {
                                if (!patients.length) {
                                    ctrl.time = "0h00";
                                    return;
                                }

                                ctrl.nb = patients.length - 1;
                                var time = (patients.length - 1)*15;

                                var min = time%60;

                                if (!min) {
                                    min = "00";
                                }

                                var hours = Math.floor(time/60);

                                ctrl.time = hours + "h" + min;
                                resolve();
                            })
                            .catch(function () { reject(); });
    
                        /*this.listTabs = ["File d'attente", "Statistiques"];
                        this.currentTab = this.listTabs[0];*/
                    })
                };
            }
        ]
    });