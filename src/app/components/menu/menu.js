import 'ionic-sdk/release/js/ionic.bundle';
import uiRouter from 'angular-ui-router';
import controller from './menu.controller';

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
      template: require('./menu.html')
    });
})

.controller('menu.controller', controller)


export default menuModule;
