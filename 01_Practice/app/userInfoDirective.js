(function () {
    angular.module('myApp').directive('uiFoo',
        function () {
            return {
                restrict: 'A',
                link: function ($scope, element, attrs) {
                    $scope.message = function () {
                        alert(1);
                    };
                },
                controller: function ($scope) {
                    $scope.message = function () {
                        alert("works!");
                    }
                }
            };
        }
    ).directive('uiBar',
        function () {
            return {
                restrict: 'A',
                require: '^uiFoo',
                scope: true,
                link: function ($scope, element, attrs, uiBarController) {
                    console.log(uiBarController);
                }
            };
        }
    );
})();