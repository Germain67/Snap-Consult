import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import routes from './app.routes'
import homeComponent from './homeComponent'
import secondComponent from './secondComponent/secondComponent'

import styles from './app.css'


angular.module('snapConsult', [uirouter, homeComponent])
    .config(routes)
