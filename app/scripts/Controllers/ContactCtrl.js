"use strict";
angular.module('AngExample')
    .controller('ContactCtrl', function ($scope, $http) {
    //connect to server on a different domain
    $http.defaults.headers.common = {"Access-Control-Request-Headers": "accept, origin, authorization"}; 
    $http.defaults.headers.common['Authorization'] = 'Basic ' + btoa('admin' + ':' + 'password');//encode
    $http.get('http://localhost:8000/userman/services/api/users?_type=json').
        success(function(data) {
            $scope.contactData = data;
        });
    });