import angular from 'angular'
import uirouter from '@uirouter/angularjs'
import routes from './app.routes'
import homeComponent from './homeComponent'
import mainPageComponent from './mainPageComponent/mainPageComponent'
import patientListComponent from './patientListComponent/patientListComponent' 

import styles from './app.css'


angular.module('snapConsult', [uirouter, 'pascalprecht.translate', homeComponent])
    .config(routes);

angular.module('snapConsult').config(['$translateProvider', function ($translateProvider) {
     $translateProvider.useStaticFilesLoader({
        prefix: "/resources/languages/",
        suffix: ".json"
    });
    $translateProvider.useSanitizeValueStrategy(null);
    $translateProvider.preferredLanguage('en');
}]);