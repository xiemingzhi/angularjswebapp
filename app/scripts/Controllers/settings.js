'use strict';

/**
 * @ngdoc function
 * @name angularjswebappApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the angularjswebappApp
 */
angular.module('AngExample')
  .controller('SettingsCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };

  $scope.checkResults = [];

  });
