(function () {
    var app = angular.module('mainApp', ['ngResource']);

    function MainController($scope, $anchorScroll, $location, userService) {
        // userService.getUsers().success(function (data, status, header, config) {
        //     $scope.users = data;
        // }).error(function (data, status, header, config) {
        //     $log.warn(data, status, header(), config);
        // });
        // $scope.users = userService.getUsers_resource();
        userService.getUsers_resource().$promise
            .then(function (data) {
                $scope.users = data
            })
            .catch(function (err) {
                console.log(err);
            });

        $scope.scroll = function (id) {
            $location.hash(id);
            $anchorScroll();
        }
    }

    app.controller('mainCtrl', ['$scope', '$anchorScroll', '$location', 'userService', MainController]);
})();