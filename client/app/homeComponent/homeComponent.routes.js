routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('homeComponent', {
            url: '/',
            template: require('./homeComponent.html')
        })
        .state('patientInfoComponent', {
            url: '/patient',
            component: "patientInfoComponent",
        })
        .state('doctorProfileComponent', {
            url: '/doctor',
            component: "doctorProfileComponent",
        })
        .state('symptomes', {
            url: '/symptomes',
            component: "symptomesComponent",
        })
        .state('interrogatoire', {
            url: '/interrogatoire',
            component: "interrogatoireComponent",
        })
        .state('reservePlace', {
            url: '/reserveplace',
            component: "patientReservePlaceComponent",
        })
        .state('patientBoard', {
            url: '/patientboard',
            component: "patientBoardComponent",
        });
}
