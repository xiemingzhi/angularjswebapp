"use strict";
angular.module('AngExample')
    .controller('ContactCtrl', function ($scope, $http) {
    $http.get('https://pelagic-logic-648.appspot.com/contact/jsonlist.json').
        success(function(data) {
            $scope.contactData = data;
        });
    });