angular.module("homeComponent").service("patientService", [
    "$q",
    "$log",
    "$http",

    function ($q, $log, $http) {
        "use strict";
        var service = this;

        service.getPatients = function () {
            return $q(function (resolve, reject) {
                $http({
                    method: "GET",
                    url: "http://localhost:8080/users",

                })
                    .then(function success(response) {
                        var patients = response.data;
                        resolve(patients);
                    })
                    .catch(function failure(response) {
                        reject();
                    });
            })
        }
    }
]);
