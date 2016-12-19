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