import angular from 'angular'
import uirouter from '@uirouter/angularjs'
import routes from './app.routes'
import homeComponent from './homeComponent'
import mainPageComponent from './mainPageComponent/mainPageComponent'
import headerComponent from './mainPageComponent/headerComponent/headerComponent'
import patientInfoComponent from './patientInfoComponent/patientInfoComponent' 
import patientListComponent from './patientListComponent/patientListComponent' 
import patientListItemComponent from './patientListComponent/patientListItemComponent/patientListItemComponent' 
import doctorProfileComponent from './userProfile/doctorProfileComponent/doctorProfileComponent' 
import patientDetailsComponent from './patientDetailsComponent/patientDetailsComponent' 
import patientReservePlaceComponent from './patientReservePlace/patientReservePlaceComponent' 


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