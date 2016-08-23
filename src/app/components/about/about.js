import 'ionic-sdk/release/js/ionic.bundle';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import aboutComponent from './about.component';
import aboutFactory from './about.factory';

let aboutModule = angular.module('about', [
  uiRouter,
  Resource
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('app.about', {
      url: '/about',
      views: {
	      'menuContent': {
	        template: require('./about.html')
		    }
	    }
    });
})

.directive('aboutView', aboutComponent)
.factory('about.factory', aboutFactory); 

export default aboutModule;
