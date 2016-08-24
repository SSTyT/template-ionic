import 'ionic-sdk/release/js/ionic.bundle';
import Components from './components/components';

import './app.scss';

angular.module('app', ['ionic', Components.name])

.run(($ionicPlatform) => {

  $ionicPlatform.ready(() => {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

})

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/app/home');
});
