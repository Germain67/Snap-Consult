routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('homeComponent', {
            url: '/',
            template: require('./homeComponent.html')
        })
        .state('patientInfoComponent', {
            url: '/patient',
            template: require('../patientInfoComponent/patientInfoComponent.html')
        });
}