/**
 * 
 */
'use strict';
angular.module('AngExample')
    .config(['$routeProvider', function($routeProvider) {
        var view = function(view) {
            return 'views/' + view.split('.').join('/') + '.html';
        }
        $routeProvider
        .otherwise({redirectTo: '/'})
        .when('/', {templateUrl: view('home'), controller: 'HomeCtrl'})
        .when('/about', {templateUrl: view('about'), controller: 'AboutCtrl'})
        .when('/contact', {templateUrl: view('contact'), controller: 'ContactCtrl'})
        .when('/unautorized', {template: 'The server respond 401 Unautorized.'})
        ;
    }]);

angular.module('AngExample').run([
  '$rootScope',
  function($rootScope) {
    // see what's going on when the route tries to change
    $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
      // both newUrl and oldUrl are strings
      console.log('Starting to leave %s to go to %s', oldUrl, newUrl);
    });
  }
]);
