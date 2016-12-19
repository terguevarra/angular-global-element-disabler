(function(){
    'use strict';

    angular
        .module('terguevarraGlobalElementDisabler')
        .config(['$httpProvider', function($httpProvider){
            $httpProvider.interceptors.push('terguevarraGlobalElementDisablerInterceptor');
        }]);
})();