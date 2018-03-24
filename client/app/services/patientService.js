angular.module("homeComponent").service("patientService", [

    "$log",
    "$http",

    function ($log) {
        "use strict";
        var service = this;

        service.getPatients = function () {
            $http({
                method: "GET",
                url: "localhost:8080/users",

            })
                .then(function success(response) {

                })
                .catch(function failure(response) {

                });
        }
    }
]);
