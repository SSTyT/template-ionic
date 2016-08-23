import 'ionic-sdk/release/js/ionic.bundle';
import Home from './home/home';
import About from './about/about';
import Menu from './menu/menu';

let componentModule = angular.module('app.components', [
  Menu.name,
  Home.name,
  About.name
]);

export default componentModule;