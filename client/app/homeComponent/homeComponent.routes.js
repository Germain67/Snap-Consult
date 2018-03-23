routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('homeComponent', {
            url: '/',
            template: require('./homeComponent.html')
        });
}