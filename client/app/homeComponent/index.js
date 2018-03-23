import angular from 'angular'
import uirouter from '@uirouter/angularjs'
import routes from './homeComponent.routes.js'

 
export default angular.module('homeComponent', [uirouter])
  .config(routes).name
