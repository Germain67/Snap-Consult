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
        });
}