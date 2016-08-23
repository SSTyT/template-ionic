import angular from 'angular';
import 'ionic-sdk/release/js/ionic.bundle';
import uiRouter from 'angular-ui-router';
import Components from './components/components';

import './app.scss';

let run = ($ionicPlatform) => {
  $ionicPlatform.ready(() => {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
};

let config = ($stateProvider, $urlRouterProvider) => {
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
};

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.foo = 'bar';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ionic', Components.name])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .run(run)
  .config(config);


export default MODULE_NAME;
