import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './menu.controller';
import app from '../app';

let menuModule = angular.module('menu', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      controller: 'menu.controller',
      controllerAs: 'vm',
      templateUrl: require('./menu.html')
    });
})

.controller('menu.controller', controller)


export default menuModule;
