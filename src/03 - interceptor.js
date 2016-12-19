(function () {
    'use strict';

    angular
        .module('terguevarraGlobalElementDisabler')
        .service('terguevarraGlobalElementDisablerInterceptor', terguevarraGlobalElementDisablerInterceptor)

    terguevarraGlobalElementDisablerInterceptor.$inject = ['$q', '$rootScope', '$log'];

    function terguevarraGlobalElementDisablerInterceptor($q, $rootScope, $log) {
        var xhrCreations = 0;
        var xhrResolutions = 0;

        function isLoading() {
            return xhrResolutions < xhrCreations;
        }

        function updateStatus() {
            $rootScope.terguevarraGlobalElementDisablerLoading = isLoading();
        }

        return {
            request: function (config) {
                xhrCreations++;
                updateStatus();
                return config;
            },
            requestError: function (rejection) {
                xhrResolutions++;
                updateStatus();
                $log.error('Request error:', rejection);
                return $q.reject(rejection);
            },
            response: function (response) {
                xhrResolutions++;
                updateStatus();
                return response;
            },
            responseError: function (rejection) {
                xhrResolutions++;
                updateStatus();
                $log.error('Response error:', rejection);
                return $q.reject(rejection);
            }
        };
    }

})();