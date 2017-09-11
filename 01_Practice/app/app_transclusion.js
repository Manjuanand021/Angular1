// Code goes here
(function () {
    var app = angular.module('myApp', []);

    function MyController($scope) {
        $scope.msg = 'Welcome to amgular js tutorials.'
        $scope.user = {
            empId: 130787,
            name: 'Manjuanand Toladinni',
            role: 'Technology Lead'
        }
    }
    app.controller('myCtrl', ['$scope', MyController]);

    function UserTile() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'userTile.html'
        }
    }
    app.directive('mtUserTile', [UserTile]);
})();