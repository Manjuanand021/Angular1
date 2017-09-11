(function () {
    var app = angular.module('myApp');

    function OnlyNumbers() {
        return {
            restrict: 'E',
            template: 'numbers entered - {{numbers}}',
            link: function (scope, elm, attrs, controller) {
                attrs.$observe('lol', function (newValue, oldValue) {
                    if (newValue !== oldValue)
                        elm.html('Values entered - ' + newValue);
                })
            }
        }
    }
    app.directive('onlyNumbers', [OnlyNumbers]);
})();