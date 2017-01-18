/**
 * 
 */
"use strict";
angular.module('AngExample')
    .factory('RequestInterceptor', ['CSRF_TOKEN', function(CSRF_TOKEN) {

        /**
         * Configure the Request Interceptor here
         */          
        /*var requestInterceptor = {
            request: function(config) {
                config.headers['x-session-token'] = CSRF_TOKEN._token;
                return config;
            }
        };
        return requestInterceptor;*/
    }]);
