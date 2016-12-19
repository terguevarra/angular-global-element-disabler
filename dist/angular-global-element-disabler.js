/*! 
 PROJECT: angular-global-element-disabler 
 VERSION: 0.0.1 
 AUTHOR: Ruther John Guevarra 
 GITHUB: https://github.com/terguevarra/
 LATEST BUILD DATE AND TIME: December 19, 2016 05:49 PM PHILIPPINE TIME*/
(function(){
    'use strict';

    var moduleName = 'terguevarraGlobalElementDisabler';

    var appDependencies = [];

    angular.module(moduleName, appDependencies);
})();
(function(){
    'use strict';

    angular
        .module('terguevarraGlobalElementDisabler')
        .config(['$httpProvider', function($httpProvider){
            $httpProvider.interceptors.push('terguevarraGlobalElementDisablerInterceptor');
        }]);
})();
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
(function(){
    'use strict';

    angular
        .module('terguevarraGlobalElementDisabler')
        .directive('elementDisabler', elementDisabler);

        elementDisabler.$inject = ['$rootScope'];

        function elementDisabler($rootScope){
            return {
                restrict: 'A'
            }
        }
})();