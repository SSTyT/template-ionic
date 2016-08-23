import 'ionic-sdk/release/js/ionic.bundle';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import homeComponent from './home.component';
import homeFactory from './home.factory';

let homeModule = angular.module('home', [
  uiRouter,
  Resource
])
 
.config(($stateProvider, $urlRouterProvider) => {  
  "ngInject";

  $stateProvider
    .state('app.home', {
      url: '/home',
      views: {
	      'menuContent': {
	        template: require('./home.html')
		    }
	    }
    });
})

.directive('home', homeComponent)
.factory('home.factory', homeFactory); 

export default homeModule;
